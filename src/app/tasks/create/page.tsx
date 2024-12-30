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
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const router = useRouter();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];

      mediaRecorder.current.ondataavailable = (e) => {
        chunks.push(e.data);
      };

      mediaRecorder.current.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        setAudioBlob(blob);
      };

      mediaRecorder.current.start();
      setIsRecording(true);
    } catch (err) {
      console.error('Error accessing microphone:', err);
      alert('Could not access microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && isRecording) {
      mediaRecorder.current.stop();
      setIsRecording(false);
      mediaRecorder.current.stream.getTracks().forEach(track => track.stop());
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
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={isRecording ? stopRecording : startRecording}
              disabled={isProcessing}
              className={`relative inline-flex items-center justify-center w-24 h-24 rounded-full transition-all ${
                isRecording
                  ? 'bg-red-500 animate-pulse'
                  : 'button hover:scale-105'
              } disabled:opacity-50`}
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              {isRecording && (
                <div className="absolute -inset-2">
                  <div className="w-full h-full rounded-full bg-red-500 animate-ping opacity-20"></div>
                </div>
              )}
            </button>
            <p className="text-sm text-zinc-400">
              {isRecording ? 'Tap to stop recording' : audioBlob ? 'Recording complete' : 'Tap to start recording'}
            </p>
          </div>
        )}

        {mode === 'review' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white mb-4">Review Tasks</h2>
            {parsedTasks.map((task, index) => (
              <div key={task.id} className="bg-zinc-800/30 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    value={task.title}
                    onChange={(e) => handleTaskUpdate(index, 'title', e.target.value)}
                    className="bg-transparent text-white text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 w-full"
                  />
                  <button
                    onClick={() => handleTaskDelete(index)}
                    className="p-1 text-zinc-400 hover:text-red-400"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex gap-4 flex-wrap">
                  <select
                    value={task.priority || ''}
                    onChange={(e) => handleTaskUpdate(index, 'priority', e.target.value)}
                    className="bg-zinc-700 text-white rounded px-2 py-1 text-sm min-w-[100px]"
                  >
                    <option value="">No Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>

                  <input
                    type="date"
                    value={task.deadline ? new Date(task.deadline).toISOString().split('T')[0] : ''}
                    onChange={(e) => {
                      const currentDeadline = task.deadline ? new Date(task.deadline) : new Date();
                      const [year, month, day] = e.target.value.split('-');
                      currentDeadline.setFullYear(parseInt(year), parseInt(month) - 1, parseInt(day));
                      handleTaskUpdate(index, 'deadline', currentDeadline.toISOString());
                    }}
                    className="bg-zinc-700 text-white rounded px-2 py-1 text-sm min-w-[130px]"
                  />

                  <input
                    type="time"
                    value={task.deadline ? new Date(task.deadline).toTimeString().slice(0, 5) : ''}
                    onChange={(e) => {
                      const currentDeadline = task.deadline ? new Date(task.deadline) : new Date();
                      const [hours, minutes] = e.target.value.split(':');
                      currentDeadline.setHours(parseInt(hours), parseInt(minutes));
                      handleTaskUpdate(index, 'deadline', currentDeadline.toISOString());
                    }}
                    className="bg-zinc-700 text-white rounded px-2 py-1 text-sm min-w-[100px]"
                  />
                </div>

                {task.description && (
                  <textarea
                    value={task.description}
                    onChange={(e) => handleTaskUpdate(index, 'description', e.target.value)}
                    className="w-full bg-zinc-700/50 rounded p-2 text-white text-sm"
                    rows={2}
                  />
                )}
              </div>
            ))}
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
