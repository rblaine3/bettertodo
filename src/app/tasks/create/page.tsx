'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

type InputMode = 'select' | 'text' | 'voice' | 'review';

interface ParsedTask {
  id: string;
  title: string;
  description?: string;
  priority?: 'low' | 'medium' | 'high';
  deadline?: string;
}

export default function CreateTaskPage() {
  const [mode, setMode] = useState<InputMode>('select');
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [textInput, setTextInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [parsedTasks, setParsedTasks] = useState<ParsedTask[]>([]);
  const [permissionDenied, setPermissionDenied] = useState(false);
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
    if (!input || (typeof input === 'string' && !input.trim())) return;

    setIsProcessing(true);
    try {
      const formData = new FormData();
      if (input instanceof Blob) {
        formData.append('audio', input, 'recording.webm');
      } else {
        formData.append('text', input);
      }

      const response = await fetch('/api/tasks/parse', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to parse task');

      const data = await response.json();
      if (data.tasks?.length) {
        setParsedTasks(data.tasks);
        setMode('review');
      }
    } catch (error) {
      console.error('Error processing input:', error);
      alert('Error processing your input. Please try again.');
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
    setParsedTasks(prev => prev.filter((_, i) => i !== index));
  };

  const handleSaveTasks = async () => {
    if (!parsedTasks.length) return;

    setIsProcessing(true);
    try {
      const response = await fetch('/api/tasks/bulk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tasks: parsedTasks }),
      });

      if (!response.ok) throw new Error('Failed to save tasks');

      router.push('/tasks');
    } catch (error) {
      console.error('Error saving tasks:', error);
      alert('Error saving tasks. Please try again.');
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
              Describe your task naturally, including any priority level or due dates. For example:
            </p>
            <div className="mt-2 space-y-2 text-sm text-zinc-400">
              <p>• "Submit quarterly report by next Friday"</p>
              <p>• "High priority: Call client about project updates tomorrow at 2pm"</p>
              <p>• "Buy groceries this weekend, low priority"</p>
            </div>
            <p className="mt-4 text-zinc-500 text-sm">
              Our AI will automatically detect the task title, priority, and due date from your input.
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
          <div className="mt-8 flex justify-end gap-4">
            <button
              onClick={() => {
                setMode('select');
                setTextInput('');
                setAudioBlob(null);
                setParsedTasks([]);
              }}
              className="px-4 py-2 bg-zinc-700 text-zinc-300 rounded-lg hover:bg-zinc-600"
            >
              Start Over
            </button>
            <button
              onClick={handleSaveTasks}
              disabled={isProcessing || parsedTasks.length === 0}
              className="submit-button px-4 py-2 rounded-lg disabled:opacity-50"
            >
              {isProcessing ? 'Saving...' : 'Save Tasks'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
