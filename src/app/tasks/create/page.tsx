'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

type InputMode = 'select' | 'text' | 'voice' | 'review';

interface ParsedTask {
  id: string;
  title: string;
  notes: string;
  priority: 'low' | 'medium' | 'high';
  dueDate: string | null;
  dueTime: string | null;
}

export default function CreateTaskPage() {
  const [mode, setMode] = useState<InputMode>('select');
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [textInput, setTextInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [parsedTasks, setParsedTasks] = useState<ParsedTask[]>([]);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const router = useRouter();

  const startRecording = async () => {
    try {
      // Reset permission denied state
      setPermissionDenied(false);

      // More specific audio constraints for better mobile support
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          sampleRate: 44100,
        }
      });

      const options = {
        mimeType: 'audio/webm;codecs=opus'
      };

      // Check if the browser supports the mime type, fallback if not
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.log('Falling back to default mime type');
        mediaRecorder.current = new MediaRecorder(stream);
      } else {
        mediaRecorder.current = new MediaRecorder(stream, options);
      }

      const chunks: BlobPart[] = [];

      mediaRecorder.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.current.onstop = () => {
        const blob = new Blob(chunks, { type: mediaRecorder.current?.mimeType || 'audio/webm' });
        setAudioBlob(blob);
      };

      // Request data every second for better reliability
      mediaRecorder.current.start(1000);
      setIsRecording(true);
    } catch (err) {
      console.error('Error accessing microphone:', err);
      setPermissionDenied(true);
      
      // More specific error messages
      if (err instanceof DOMException) {
        if (err.name === 'NotAllowedError') {
          alert('Microphone access was denied. Please allow microphone access in your browser settings and try again.');
        } else if (err.name === 'NotFoundError') {
          alert('No microphone was found. Please ensure your device has a working microphone.');
        } else if (err.name === 'NotReadableError') {
          alert('Could not access your microphone. Please ensure no other app is using it.');
        } else {
          alert('Could not access microphone. Please check permissions and try again.');
        }
      } else {
        alert('An error occurred while trying to access the microphone. Please try again.');
      }
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && isRecording) {
      try {
        mediaRecorder.current.stop();
        mediaRecorder.current.stream.getTracks().forEach(track => track.stop());
      } catch (err) {
        console.error('Error stopping recording:', err);
      }
      setIsRecording(false);
    }
  };

  const processInput = async () => {
    const input = mode === 'voice' ? audioBlob : textInput;
    console.log('Processing input:', { mode, input });
    
    if (!input || (typeof input === 'string' && !input.trim())) {
      alert('Please provide some input before processing');
      return;
    }

    setIsProcessing(true);
    try {
      // Create form data with either voice or text input
      const formData = new FormData();
      if (input instanceof Blob) {
        formData.append('audio', input, 'recording.webm');
        console.log('Added audio blob to form data');
      } else {
        formData.append('text', input);
        console.log('Added text to form data:', input);
      }

      console.log('Sending request to parse API...');
      const response = await fetch('/api/tasks/parse', {
        method: 'POST',
        body: formData,
      });

      console.log('API Response:', await response.clone().json());
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('API error details:', errorData);
        throw new Error(errorData.error || 'Failed to process input');
      }

      const data = await response.json();
      console.log('Setting parsed tasks:', data.tasks);
      
      if (!data.success || !data.tasks) {
        throw new Error(data.error || 'Invalid response format');
      }

      setParsedTasks(data.tasks);
      setMode('review');
    } catch (error) {
      console.error('Error processing input:', error);
      setError(error instanceof Error ? error.message : 'Failed to process input');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleTaskUpdate = (index: number, field: keyof ParsedTask, value: string) => {
    setParsedTasks(prev => prev.map((task, i) => 
      i === index ? { ...task, [field]: value } : task
    ));
  };

  const handleTaskDelete = (index: number) => {
    setParsedTasks(tasks => tasks.filter((_, i) => i !== index));
  };

  const handleSaveTasks = async () => {
    try {
      setIsProcessing(true);
      
      // Process tasks before saving
      const processedTasks = parsedTasks.map(task => ({
        ...task,
        dueDate: task.dueDate ? new Date(task.dueDate) : null,
      }));

      const responses = await Promise.all(
        processedTasks.map(task =>
          fetch('/api/tasks', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
          })
        )
      );

      const failedResponses = responses.filter(response => !response.ok);
      if (failedResponses.length > 0) {
        throw new Error(`Failed to save ${failedResponses.length} tasks`);
      }

      router.push('/tasks');
    } catch (error) {
      console.error('Error saving tasks:', error);
      setError(error instanceof Error ? error.message : 'Failed to save tasks');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="page-content">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {mode !== 'review' && (
          <div className="bg-zinc-800/30 rounded-lg p-6 mb-8">
            <h2 className="text-lg text-zinc-300 mb-2">How to Create a Task</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Describe your tasks naturally, including any priority levels or due dates. You can add multiple tasks at once. For example:
            </p>
            <div className="mt-2 space-y-2 text-sm text-zinc-400">
              <p>• "Buy groceries tomorrow morning and call mom in the evening"</p>
              <p>• "High priority: Submit report by Friday, then schedule team meeting for next week"</p>
              <p>• "Get haircut this weekend and buy birthday gift for Sarah by next Thursday"</p>
            </div>
            <p className="mt-4 text-zinc-500 text-sm">
              Our AI will automatically detect task titles, priorities, and due dates from your input.
            </p>
          </div>
        )}

        {mode === 'select' && (
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => setMode('text')}
              className="w-full max-w-sm p-6 bg-zinc-800/30 rounded-lg hover:bg-zinc-800/50 transition-colors group"
            >
              <div className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span className="text-lg text-zinc-400 group-hover:text-white transition-colors">Text Input</span>
              </div>
            </button>

            <button
              onClick={() => setMode('voice')}
              className="w-full max-w-sm p-6 bg-zinc-800/30 rounded-lg hover:bg-zinc-800/50 transition-colors group"
            >
              <div className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                <span className="text-lg text-zinc-400 group-hover:text-white transition-colors">Voice Input</span>
              </div>
            </button>
          </div>
        )}

        {mode === 'text' && (
          <div className="space-y-6">
            <textarea
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Describe your task..."
              className="w-full h-32 bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isProcessing}
            />
          </div>
        )}

        {mode === 'voice' && (
          <div className="space-y-4 text-center">
            <div className="flex flex-col items-center gap-4">
              {permissionDenied ? (
                <div className="text-red-400 mb-4">
                  <p>Microphone access was denied.</p>
                  <p className="text-sm mt-2">Please check your browser settings and try again.</p>
                </div>
              ) : isRecording ? (
                <>
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-8 h-8 bg-red-600 rounded-full" />
                  </div>
                  <button
                    onClick={stopRecording}
                    className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                  >
                    Stop Recording
                  </button>
                </>
              ) : audioBlob ? (
                <>
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={() => {
                        setAudioBlob(null);
                        startRecording();
                      }}
                      className="px-6 py-3 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-colors"
                    >
                      Record Again
                    </button>
                    <button
                      onClick={processInput}
                      className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'Processing...' : 'Use Recording'}
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <button
                    onClick={startRecording}
                    className="w-16 h-16 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                  <p className="text-zinc-400">Click to start recording</p>
                </>
              )}
            </div>
          </div>
        )}

        {(mode === 'text' || mode === 'voice') && (
          <div className="mt-8 flex justify-end gap-4">
            <button
              onClick={() => {
                setMode('select');
                setTextInput('');
                setAudioBlob(null);
                setIsRecording(false);
                if (mediaRecorder.current?.stream) {
                  mediaRecorder.current.stream.getTracks().forEach(track => track.stop());
                }
              }}
              className="px-4 py-2 bg-zinc-700 text-zinc-300 rounded-lg hover:bg-zinc-600"
            >
              Back
            </button>
            <button
              onClick={processInput}
              disabled={isProcessing || (mode === 'text' ? !textInput.trim() : !audioBlob)}
              className="submit-button px-4 py-2 rounded-lg disabled:opacity-50"
            >
              {isProcessing ? 'Processing...' : 'Process Task'}
            </button>
          </div>
        )}

        {mode === 'review' && (
          <div>
            <h2 className="text-xl text-zinc-200 mb-4">Review Tasks</h2>
            {error && (
              <div className="text-red-400 mb-4">
                <p>Error: {error}</p>
              </div>
            )}
            <div className="bg-zinc-800/30 rounded-lg overflow-hidden">
              <div className="divide-y divide-zinc-700/50">
                {parsedTasks.map((task, index) => (
                  <div key={task.id} className="p-4 hover:bg-zinc-700/20 transition-colors">
                    {/* Title Row */}
                    <div className="mb-3">
                      <input
                        type="text"
                        value={task.title}
                        onChange={(e) => handleTaskUpdate(index, 'title', e.target.value)}
                        className="w-full bg-zinc-800/30 border border-zinc-700 rounded px-3 py-2 text-white text-base font-medium"
                        placeholder="Task title"
                      />
                    </div>
                    
                    {/* Notes Row */}
                    <div className="mb-3">
                      <input
                        type="text"
                        value={task.notes}
                        onChange={(e) => handleTaskUpdate(index, 'notes', e.target.value)}
                        className="w-full bg-zinc-800/30 border border-zinc-700 rounded px-3 py-2 text-white text-sm"
                        placeholder="Add notes..."
                      />
                    </div>
                    
                    {/* Details Row */}
                    <div className="flex items-center gap-2">
                      <select
                        value={task.priority}
                        onChange={(e) => handleTaskUpdate(index, 'priority', e.target.value)}
                        className="bg-zinc-800/30 border border-zinc-700 rounded px-2 py-1 text-xs min-w-[80px]"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                      
                      <input
                        type="date"
                        value={task.dueDate || ''}
                        onChange={(e) => handleTaskUpdate(index, 'dueDate', e.target.value)}
                        className="bg-zinc-800/30 border border-zinc-700 rounded px-2 py-1 text-xs"
                      />
                      
                      <input
                        type="time"
                        value={task.dueTime || ''}
                        onChange={(e) => handleTaskUpdate(index, 'dueTime', e.target.value)}
                        className="bg-zinc-800/30 border border-zinc-700 rounded px-2 py-1 text-xs"
                      />
                      
                      <button
                        onClick={() => handleTaskDelete(index)}
                        className="ml-auto p-1.5 text-zinc-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                        title="Delete task"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => {
                  setMode('select');
                  setTextInput('');
                  setAudioBlob(null);
                  setParsedTasks([]);
                  setError(null);
                }}
                className="px-4 py-2 bg-zinc-700 text-zinc-300 rounded-lg hover:bg-zinc-600 text-sm"
              >
                Start Over
              </button>
              <button
                onClick={handleSaveTasks}
                disabled={isProcessing || parsedTasks.length === 0}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg disabled:opacity-50 disabled:hover:from-blue-500 disabled:hover:to-indigo-600 text-sm font-medium shadow-lg shadow-blue-500/20 transition-all"
              >
                {isProcessing ? 'Saving...' : 'Save Tasks'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
