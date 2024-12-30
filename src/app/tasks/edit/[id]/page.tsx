'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Task {
  id: string;
  title: string;
  description?: string;
  deadline?: string;
  priority?: 'low' | 'medium' | 'high';
}

export default function EditTaskPage({ params }: { params: { id: string } }) {
  const [task, setTask] = useState<Task | null>(null);
  const router = useRouter();

  useEffect(() => {
    // In a real app, we'd fetch the task from the server
    // For now, we'll use localStorage as a temporary solution
    const tasks = JSON.parse(localStorage.getItem('pendingTasks') || '[]');
    const foundTask = tasks.find((t: Task) => t.id === params.id);
    if (foundTask) {
      setTask(foundTask);
    }
  }, [params.id]);

  const handleUpdate = (field: keyof Task, value: string) => {
    if (task) {
      setTask({ ...task, [field]: value });
    }
  };

  const handleSave = async () => {
    if (!task) return;

    try {
      const response = await fetch(`/api/tasks/${task.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error('Failed to update task');
      }

      router.push('/tasks');
    } catch (error) {
      console.error('Error updating task:', error);
      alert('Error updating task. Please try again.');
    }
  };

  if (!task) {
    return (
      <div className="min-h-screen bg-zinc-900 text-zinc-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <div className="container mx-auto p-6 max-w-2xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Edit Task</h1>
          <button
            onClick={() => router.back()}
            className="text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6 bg-zinc-800 border border-zinc-700 rounded-xl p-6">
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Title</label>
            <input
              type="text"
              value={task.title}
              onChange={(e) => handleUpdate('title', e.target.value)}
              className="w-full bg-zinc-700 border-zinc-600 rounded-lg px-3 py-2
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Description</label>
            <textarea
              value={task.description || ''}
              onChange={(e) => handleUpdate('description', e.target.value)}
              className="w-full bg-zinc-700 border-zinc-600 rounded-lg px-3 py-2
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white
                        min-h-[150px]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-zinc-400">Deadline</label>
              <input
                type="datetime-local"
                value={task.deadline || ''}
                onChange={(e) => handleUpdate('deadline', e.target.value)}
                className="w-full bg-zinc-700 border-zinc-600 rounded-lg px-3 py-2
                          focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-zinc-400">Priority</label>
              <select
                value={task.priority || 'medium'}
                onChange={(e) => handleUpdate('priority', e.target.value)}
                className="w-full bg-zinc-700 border-zinc-600 rounded-lg px-3 py-2
                          focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6">
            <button
              onClick={() => router.back()}
              className="px-6 py-3 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 
                        transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                        transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
