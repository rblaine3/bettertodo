'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Task {
  _id: string;
  title: string;
  description?: string;
  status: 'pending' | 'in_progress' | 'completed' | 'archived';
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  dueTime?: string;
}

type SortOption = 
  | 'due-date-asc' 
  | 'due-date-desc' 
  | 'priority-asc' 
  | 'priority-desc'
  | 'title-asc'
  | 'title-desc';

const sortOptions = [
  { value: 'due-date-asc', label: 'Due Date (Earliest First)' },
  { value: 'due-date-desc', label: 'Due Date (Latest First)' },
  { value: 'priority-asc', label: 'Priority (Low to High)' },
  { value: 'priority-desc', label: 'Priority (High to Low)' },
  { value: 'title-asc', label: 'Title (A to Z)' },
  { value: 'title-desc', label: 'Title (Z to A)' },
];

const priorityValues = {
  high: 3,
  medium: 2,
  low: 1
};

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortBy, setSortBy] = useState<SortOption>('due-date-asc');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/tasks');
        if (!response.ok) throw new Error('Failed to fetch tasks');
        const data = await response.json();
        setTasks(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const toTitleCase = (str: string) => {
    return str.split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const formatDateTime = (date?: string, time?: string) => {
    if (!date) return '';
    const formattedDate = new Date(date).toLocaleDateString();
    return time ? `${formattedDate} at ${time}` : formattedDate;
  };

  const handleDelete = async (e: React.MouseEvent, taskId: string) => {
    e.preventDefault(); // Prevent navigation
    if (!confirm('Are you sure you want to delete this task?')) return;

    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete task');
      
      // Remove task from state
      setTasks(prev => prev.filter(task => task._id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
      alert('Failed to delete task. Please try again.');
    }
  };

  const getSortedTasks = () => {
    const filteredTasks = selectedStatus === 'all' 
      ? tasks 
      : tasks.filter(task => task.status === selectedStatus);

    return filteredTasks.sort((a, b) => {
      switch (sortBy) {
        case 'due-date-asc':
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        case 'due-date-desc':
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
        case 'priority-asc':
          return priorityValues[a.priority as keyof typeof priorityValues] - 
                 priorityValues[b.priority as keyof typeof priorityValues];
        case 'priority-desc':
          return priorityValues[b.priority as keyof typeof priorityValues] - 
                 priorityValues[a.priority as keyof typeof priorityValues];
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading Tasks...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-red-400">Error: {error}</div>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">No Tasks Yet</h2>
          <p className="text-zinc-400 mb-4">Create your first task to get started</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Tasks</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-zinc-800/50 text-zinc-300 rounded-lg px-2 py-1 text-sm focus:ring-0 focus:outline-none cursor-pointer max-w-[130px]"
          >
            <option value="all">All Tasks</option>
            <option value="pending">Pending</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="archived">Archived</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-zinc-800/50 text-zinc-300 rounded-lg px-2 py-1 text-sm focus:ring-0 focus:outline-none cursor-pointer max-w-[180px]"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          {getSortedTasks().map((task) => (
            <Link
              key={task._id}
              href={`/tasks/${task._id}`}
              className="block bg-zinc-800/50 rounded-lg p-4 hover:bg-zinc-800/70 transition-colors relative group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-1">{task.title}</h3>
                  {task.description && (
                    <p className="text-zinc-400 text-sm mb-2 line-clamp-2">{task.description}</p>
                  )}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2 py-1 text-sm rounded-md ${
                      task.status === 'completed' ? 'bg-green-900/50 text-green-200' :
                      task.status === 'in_progress' ? 'bg-blue-900/50 text-blue-200' :
                      task.status === 'archived' ? 'bg-zinc-700/50 text-zinc-300' :
                      'bg-zinc-800/50 text-zinc-300'
                    }`}>
                      {toTitleCase(task.status)}
                    </span>
                    <span className={`px-2 py-1 text-sm rounded-md ${
                      task.priority === 'high' ? 'bg-red-900/50 text-red-200' :
                      task.priority === 'medium' ? 'bg-yellow-900/50 text-yellow-200' :
                      'bg-green-900/50 text-green-200'
                    }`}>
                      {toTitleCase(task.priority)} Priority
                    </span>
                    {(task.dueDate || task.dueTime) && (
                      <span className="px-2 py-1 text-sm rounded-md bg-zinc-800/50 text-zinc-300">
                        Due: {formatDateTime(task.dueDate, task.dueTime)}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => handleDelete(e, task._id)}
                    className="p-1.5 text-zinc-400 hover:text-red-400 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                  <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
