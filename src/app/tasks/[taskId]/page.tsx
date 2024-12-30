'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

interface Task {
  _id: string;
  title: string;
  description?: string;
  status: 'pending' | 'in_progress' | 'completed' | 'archived';
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  dueTime?: string;
  notes?: string;
  subTasks?: { 
    _id: string;
    title: string; 
    status: 'not_started' | 'in_progress' | 'completed';
    dueDate?: string;
    dueTime?: string;
    createdAt: string;
  }[];
}

export default function TaskDetailPage() {
  const { taskId } = useParams();
  const [task, setTask] = useState<Task | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editableTitle, setEditableTitle] = useState('');
  const [editableDescription, setEditableDescription] = useState('');
  const [editableNotes, setEditableNotes] = useState('');
  const [editingSubtaskId, setEditingSubtaskId] = useState<string | null>(null);
  const [editingSubtaskTitle, setEditingSubtaskTitle] = useState('');
  const [newSubTask, setNewSubTask] = useState('');
  const [isGeneratingSubtasks, setIsGeneratingSubtasks] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/tasks/${taskId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch task');
        }
        const data = await response.json();
        setTask(data);
        setEditableTitle(data.title || '');
        setEditableDescription(data.description || '');
        setEditableNotes(data.notes || '');
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTask();
  }, [taskId]);

  const handleTitleChange = async () => {
    if (!task || task.title === editableTitle) return;
    
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: editableTitle }),
      });
      
      if (!response.ok) throw new Error('Failed to update title');
      
      setTask(prev => prev ? { ...prev, title: editableTitle } : null);
    } catch (err: any) {
      console.error('Error updating title:', err);
    }
  };

  const handleDescriptionChange = async () => {
    if (!task || task.description === editableDescription) return;
    
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: editableDescription }),
      });
      
      if (!response.ok) throw new Error('Failed to update description');
      
      setTask(prev => prev ? { ...prev, description: editableDescription } : null);
    } catch (err: any) {
      console.error('Error updating description:', err);
    }
  };

  const handleNotesChange = async () => {
    if (!task || task.notes === editableNotes) return;
    
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes: editableNotes }),
      });
      
      if (!response.ok) throw new Error('Failed to update notes');
      
      setTask(prev => prev ? { ...prev, notes: editableNotes } : null);
    } catch (err: any) {
      console.error('Error updating notes:', err);
    }
  };

  const addSubTask = async () => {
    if (!newSubTask.trim()) return;

    try {
      const response = await fetch(`/api/tasks/${taskId}/subtasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          title: newSubTask,
          status: 'not_started'
        }),
      });

      if (!response.ok) throw new Error('Failed to add subtask');

      const updatedTask = await response.json();
      setTask(updatedTask);
      setNewSubTask('');
    } catch (err: any) {
      console.error('Error adding subtask:', err);
    }
  };

  const updateSubTaskStatus = async (subtaskId: string, status: 'not_started' | 'in_progress' | 'completed') => {
    try {
      const response = await fetch(`/api/tasks/${taskId}/subtasks/${subtaskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) throw new Error('Failed to update subtask');

      const updatedTask = await response.json();
      setTask(updatedTask);
    } catch (err: any) {
      console.error('Error updating subtask:', err);
    }
  };

  const updateSubTaskTitle = async (subtaskId: string) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}/subtasks/${subtaskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: editingSubtaskTitle }),
      });

      if (!response.ok) throw new Error('Failed to update subtask');

      const updatedTask = await response.json();
      setTask(updatedTask);
      setEditingSubtaskId(null);
      setEditingSubtaskTitle('');
    } catch (err: any) {
      console.error('Error updating subtask:', err);
    }
  };

  const deleteSubTask = async (subtaskId: string) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}/subtasks/${subtaskId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete subtask');

      const updatedTask = await response.json();
      setTask(updatedTask);
    } catch (err: any) {
      console.error('Error deleting subtask:', err);
    }
  };

  const updateTaskStatus = async (status: Task['status']) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      
      if (!response.ok) throw new Error('Failed to update status');
      
      setTask(prev => prev ? { ...prev, status } : null);
    } catch (err: any) {
      console.error('Error updating status:', err);
    }
  };

  const updateTaskPriority = async (priority: Task['priority']) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priority }),
      });
      
      if (!response.ok) throw new Error('Failed to update priority');
      
      setTask(prev => prev ? { ...prev, priority } : null);
    } catch (err: any) {
      console.error('Error updating priority:', err);
    }
  };

  const formatDateForInput = (date: string | undefined) => {
    if (!date) return '';
    return new Date(date).toISOString().split('T')[0];
  };

  const formatTimeForInput = (time: string | undefined) => {
    if (!time) return '';
    return time;
  };

  const formatDateTime = (date?: string, time?: string) => {
    if (!date) return '';
    const formattedDate = new Date(date).toLocaleDateString();
    return time ? `${formattedDate} at ${time}` : formattedDate;
  };

  const updateTaskDate = async (date: string | undefined) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dueDate: date }),
      });
      
      if (!response.ok) throw new Error('Failed to update date');
      
      setTask(prev => prev ? { ...prev, dueDate: date } : null);
    } catch (err: any) {
      console.error('Error updating date:', err);
    }
  };

  const updateTaskTime = async (time: string | undefined) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dueTime: time }),
      });
      
      if (!response.ok) throw new Error('Failed to update time');
      
      setTask(prev => prev ? { ...prev, dueTime: time } : null);
    } catch (err: any) {
      console.error('Error updating time:', err);
    }
  };

  const updateSubTaskDateTime = async (subtaskId: string, date?: string, time?: string) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}/subtasks/${subtaskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dueDate: date, dueTime: time }),
      });

      if (!response.ok) throw new Error('Failed to update subtask date/time');

      const updatedTask = await response.json();
      setTask(updatedTask);
    } catch (err: any) {
      console.error('Error updating subtask date/time:', err);
    }
  };

  const toTitleCase = (str: string) => {
    return str.split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const generateSubtasks = async () => {
    try {
      setIsGeneratingSubtasks(true);
      const response = await fetch(`/api/tasks/${taskId}/generate-subtasks`, {
        method: 'POST',
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to generate subtasks');
      }
      
      const updatedTask = await response.json();
      setTask(updatedTask);
    } catch (err: any) {
      console.error('Error generating subtasks:', err);
      alert('Failed to generate subtasks: ' + err.message);
    } finally {
      setIsGeneratingSubtasks(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading task...</span>
        </div>
      </div>
    );
  }

  if (error || !task) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-red-400">Error: {error || 'Task not found'}</div>
      </div>
    );
  }

  const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
      case 'completed':
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'in_progress':
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-zinc-900">
      <div className="flex-1 overflow-auto">
        <div className="max-w-3xl mx-auto px-6 py-8">
          {/* Title */}
          <input
            type="text"
            value={editableTitle}
            onChange={(e) => setEditableTitle(e.target.value)}
            onBlur={handleTitleChange}
            className="w-full text-4xl font-bold bg-transparent border-none focus:outline-none focus:ring-0 mb-6"
            placeholder="Task title"
          />

          {/* Status, Priority, and DateTime Badges */}
          <div className="flex flex-wrap gap-4 mb-8">
            <select
              value={task.status}
              onChange={(e) => updateTaskStatus(e.target.value as Task['status'])}
              className={`px-4 py-2 text-lg rounded-md cursor-pointer border-0 focus:ring-0 appearance-none hover:opacity-80 transition-opacity ${
                task.status === 'completed' ? 'bg-green-900/50 text-green-200' :
                task.status === 'in_progress' ? 'bg-blue-900/50 text-blue-200' :
                task.status === 'archived' ? 'bg-zinc-700/50 text-zinc-300' :
                'bg-zinc-800/50 text-zinc-300'
              }`}
            >
              <option value="pending" className="bg-zinc-800">Pending</option>
              <option value="in_progress" className="bg-zinc-800">In Progress</option>
              <option value="completed" className="bg-zinc-800">Completed</option>
              <option value="archived" className="bg-zinc-800">Archived</option>
            </select>

            <select
              value={task.priority}
              onChange={(e) => updateTaskPriority(e.target.value as Task['priority'])}
              className={`px-4 py-2 text-lg rounded-md cursor-pointer border-0 focus:ring-0 appearance-none hover:opacity-80 transition-opacity ${
                task.priority === 'high' ? 'bg-red-900/50 text-red-200' :
                task.priority === 'medium' ? 'bg-yellow-900/50 text-yellow-200' :
                'bg-green-900/50 text-green-200'
              }`}
            >
              <option value="low" className="bg-zinc-800">Low Priority</option>
              <option value="medium" className="bg-zinc-800">Medium Priority</option>
              <option value="high" className="bg-zinc-800">High Priority</option>
            </select>

            <div className="flex items-center gap-4 bg-zinc-800/50 rounded-md px-4 py-2">
              <div className="flex flex-col">
                <label className="text-xs text-zinc-400 mb-1">Due Date</label>
                <input
                  type="date"
                  value={formatDateForInput(task.dueDate)}
                  onChange={(e) => updateTaskDate(e.target.value || undefined)}
                  className="bg-transparent border-0 text-lg focus:ring-0 cursor-pointer text-zinc-300 w-40 hover:text-emerald-400 transition-colors"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs text-zinc-400 mb-1">Due Time</label>
                <input
                  type="time"
                  value={formatTimeForInput(task.dueTime)}
                  onChange={(e) => updateTaskTime(e.target.value || undefined)}
                  className="bg-transparent border-0 text-lg focus:ring-0 cursor-pointer text-zinc-300 w-32 hover:text-emerald-400 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <textarea
            value={editableDescription}
            onChange={(e) => setEditableDescription(e.target.value)}
            onBlur={handleDescriptionChange}
            className="w-full min-h-[150px] text-2xl bg-transparent border-none focus:outline-none focus:ring-0 mb-10"
            placeholder="Add a description..."
          />

          {/* Subtasks Section */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <h3 className="text-2xl font-bold">Subtasks</h3>
              </div>
              {(!task.subTasks || task.subTasks.length === 0) && (
                <button
                  onClick={generateSubtasks}
                  disabled={isGeneratingSubtasks}
                  className="flex items-center gap-2 px-3 py-1.5 bg-emerald-600/20 text-emerald-400 text-sm rounded-lg hover:bg-emerald-600/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGeneratingSubtasks ? (
                    <>
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>Generate with GPT</span>
                    </>
                  )}
                </button>
              )}
            </div>
            
            <div className="bg-zinc-800/30 rounded-lg overflow-hidden">
              <div className="divide-y divide-zinc-700/30">
                {task.subTasks?.map((subtask) => (
                  <div key={subtask._id} className="group">
                    <div className="flex items-center px-4 py-3">
                      <div className="flex-none w-32">
                        <select
                          value={subtask.status}
                          onChange={(e) => updateSubTaskStatus(subtask._id, e.target.value as 'not_started' | 'in_progress' | 'completed')}
                          className="w-full bg-transparent border-0 focus:ring-0 text-sm cursor-pointer group-hover:text-white transition-colors"
                        >
                          <option value="not_started" className="bg-zinc-800">Not Started</option>
                          <option value="in_progress" className="bg-zinc-800">In Progress</option>
                          <option value="completed" className="bg-zinc-800">Completed</option>
                        </select>
                      </div>
                      <div className="flex-1 min-w-0 px-4">
                        {editingSubtaskId === subtask._id ? (
                          <input
                            type="text"
                            value={editingSubtaskTitle}
                            onChange={(e) => setEditingSubtaskTitle(e.target.value)}
                            onBlur={() => updateSubTaskTitle(subtask._id)}
                            onKeyPress={(e) => e.key === 'Enter' && updateSubTaskTitle(subtask._id)}
                            className="w-full bg-transparent border-0 focus:ring-0 focus:outline-none text-sm"
                            autoFocus
                          />
                        ) : (
                          <span 
                            onClick={() => {
                              setEditingSubtaskId(subtask._id);
                              setEditingSubtaskTitle(subtask.title);
                            }}
                            className={`cursor-text text-sm ${
                              subtask.status === 'completed' ? 'line-through text-zinc-500' : 
                              subtask.status === 'in_progress' ? 'text-blue-400' : ''
                            }`}
                          >
                            {toTitleCase(subtask.title)}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => {
                          if (confirm('Are you sure you want to delete this subtask?')) {
                            deleteSubTask(subtask._id);
                          }
                        }}
                        className="flex-none p-1.5 hover:bg-red-500/20 rounded text-zinc-400 hover:text-red-400 transition-colors"
                        aria-label="Delete subtask"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center px-4 py-2 bg-zinc-800/30">
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                          <label className="text-xs text-zinc-400 mb-1">Due Date</label>
                          <input
                            type="date"
                            value={formatDateForInput(subtask.dueDate)}
                            onChange={(e) => updateSubTaskDateTime(subtask._id, e.target.value || undefined, subtask.dueTime)}
                            className="bg-transparent border-0 text-sm focus:ring-0 cursor-pointer text-zinc-300 hover:text-emerald-400 transition-colors"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="text-xs text-zinc-400 mb-1">Due Time</label>
                          <input
                            type="time"
                            value={formatTimeForInput(subtask.dueTime)}
                            onChange={(e) => updateSubTaskDateTime(subtask._id, subtask.dueDate, e.target.value || undefined)}
                            className="bg-transparent border-0 text-sm focus:ring-0 cursor-pointer text-zinc-300 hover:text-emerald-400 transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Add new subtask row */}
                <div className="group">
                  <div className="flex items-center px-4 py-3">
                    <div className="flex-none w-32">
                      <select
                        value="not_started"
                        disabled
                        className="w-full bg-transparent border-0 focus:ring-0 text-sm text-zinc-500"
                      >
                        <option value="not_started">Not Started</option>
                      </select>
                    </div>
                    <div className="flex-1 min-w-0 px-4">
                      <input
                        type="text"
                        value={newSubTask}
                        onChange={(e) => setNewSubTask(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addSubTask()}
                        placeholder="Add a new subtask..."
                        className="w-full bg-transparent border-0 focus:ring-0 focus:outline-none placeholder-zinc-600 text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div className="mb-10">
            <div className="flex items-center space-x-4 mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <h3 className="text-2xl font-bold">Notes</h3>
            </div>
            <textarea
              value={editableNotes}
              onChange={(e) => setEditableNotes(e.target.value)}
              onBlur={handleNotesChange}
              placeholder="Add notes..."
              className="w-full min-h-[250px] px-6 py-4 bg-zinc-800/30 rounded-lg border border-zinc-700/30 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
