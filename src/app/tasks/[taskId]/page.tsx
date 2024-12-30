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
  const [editableNotes, setEditableNotes] = useState('');
  const [editingSubtaskId, setEditingSubtaskId] = useState<string | null>(null);
  const [editingSubtaskTitle, setEditingSubtaskTitle] = useState('');
  const [newSubtask, setNewSubtask] = useState('');
  const [isCreatingSubtask, setIsCreatingSubtask] = useState(false);

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

  const handleSubtaskCreate = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newSubtask.trim()) {
      try {
        const response = await fetch(`/api/tasks/${task._id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            subTasks: [...(task.subTasks || []), { 
              title: newSubtask.trim(),
              status: 'not_started'
            }]
          }),
        });

        if (!response.ok) throw new Error('Failed to add subtask');
        const updatedTask = await response.json();
        setTask(updatedTask);
        setNewSubtask('');
        setIsCreatingSubtask(false);
      } catch (error) {
        console.error('Error adding subtask:', error);
        alert('Failed to add subtask. Please try again.');
      }
    } else if (e.key === 'Escape') {
      setNewSubtask('');
      setIsCreatingSubtask(false);
    }
  };

  const handleSubtaskStatusChange = async (subtaskId: string, status: string) => {
    try {
      const updatedSubtasks = task.subTasks.map((st: any) => 
        st._id === subtaskId ? { ...st, status } : st
      );

      const response = await fetch(`/api/tasks/${task._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subTasks: updatedSubtasks }),
      });

      if (!response.ok) throw new Error('Failed to update subtask');
      const updatedTask = await response.json();
      setTask(updatedTask);
    } catch (error) {
      console.error('Error updating subtask:', error);
      alert('Failed to update subtask. Please try again.');
    }
  };

  const handleDeleteSubtask = async (subtaskId: string) => {
    try {
      const updatedSubtasks = task.subTasks.filter((st: any) => st._id !== subtaskId);
      
      const response = await fetch(`/api/tasks/${task._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subTasks: updatedSubtasks }),
      });

      if (!response.ok) throw new Error('Failed to delete subtask');
      const updatedTask = await response.json();
      setTask(updatedTask);
    } catch (error) {
      console.error('Error deleting subtask:', error);
      alert('Failed to delete subtask. Please try again.');
    }
  };

  const handleGenerateSubtasks = async () => {
    try {
      const response = await fetch(`/api/tasks/${task._id}/parse`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: task.title }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to generate subtasks');
      }

      const { subtasks } = await response.json();
      
      // Update task with new subtasks
      const updateResponse = await fetch(`/api/tasks/${task._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subTasks: [...(task.subTasks || []), ...subtasks.map((title: string) => ({
            title,
            status: 'not_started'
          }))]
        }),
      });

      if (!updateResponse.ok) throw new Error('Failed to update task with subtasks');
      const updatedTask = await updateResponse.json();
      setTask(updatedTask);
    } catch (error: any) {
      console.error('Error generating subtasks:', error);
      alert(error.message || 'Failed to generate subtasks. Please try again.');
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
    try {
      return new Date(date).toISOString().split('T')[0];
    } catch (e) {
      return '';
    }
  };

  const formatTimeForInput = (time: string | undefined) => {
    if (!time) return '';
    // Ensure time is in HH:mm format
    const match = time.match(/^([0-9]{1,2}):([0-9]{1,2})/);
    if (match) {
      const [_, hours, minutes] = match;
      return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
    }
    return '';
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
          <div className="flex items-center gap-4 mb-8">
            <input
              value={editableTitle}
              onChange={(e) => setEditableTitle(e.target.value)}
              onBlur={handleTitleChange}
              className="flex-1 text-4xl font-bold bg-transparent border-none focus:outline-none focus:ring-0 break-words min-w-0 max-w-full"
              style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
              placeholder="Task title..."
            />
          </div>

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
                  value={formatDateForInput(task?.dueDate)}
                  onChange={(e) => updateTaskDate(e.target.value || undefined)}
                  className="bg-transparent border-0 text-lg focus:ring-0 cursor-pointer text-zinc-300 w-40 hover:text-emerald-400 transition-colors"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs text-zinc-400 mb-1">Due Time</label>
                <input
                  type="time"
                  value={formatTimeForInput(task?.dueTime)}
                  onChange={(e) => updateTaskTime(e.target.value || undefined)}
                  className="bg-transparent border-0 text-lg focus:ring-0 cursor-pointer text-zinc-300 w-32 hover:text-emerald-400 transition-colors"
                />
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
              className="w-full min-h-[150px] bg-zinc-800/30 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              placeholder="Add notes..."
            />
          </div>

          {/* Subtasks Section */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Subtasks</h2>
              <button
                onClick={handleGenerateSubtasks}
                className="flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-md transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm font-medium">Generate with AI</span>
              </button>
            </div>
            
            {/* New Subtask Input */}
            <div className="mb-4">
              {isCreatingSubtask ? (
                <input
                  type="text"
                  value={newSubtask}
                  onChange={(e) => setNewSubtask(e.target.value)}
                  onKeyDown={handleSubtaskCreate}
                  placeholder="Press Enter to add, Escape to cancel"
                  className="w-full px-3 py-2 bg-zinc-800/50 rounded-md border-0 focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
              ) : (
                <button
                  onClick={() => setIsCreatingSubtask(true)}
                  className="w-full px-3 py-2 text-left text-zinc-400 bg-zinc-800/50 rounded-md hover:bg-zinc-800/70 transition-colors"
                >
                  + Add subtask
                </button>
              )}
            </div>

            {/* Subtasks List */}
            <div className="space-y-2">
              {task.subTasks?.map((subtask: any) => (
                <div
                  key={subtask._id}
                  className="flex items-center gap-3 p-2 bg-zinc-800/30 rounded-md group"
                >
                  <select
                    value={subtask.status}
                    onChange={(e) => handleSubtaskStatusChange(subtask._id, e.target.value)}
                    className={`shrink-0 px-2 py-1 text-sm rounded-md border-0 cursor-pointer focus:ring-0 ${
                      subtask.status === 'completed' ? 'bg-green-900/50 text-green-200' :
                      subtask.status === 'in_progress' ? 'bg-blue-900/50 text-blue-200' :
                      'bg-zinc-800/50 text-zinc-300'
                    }`}
                  >
                    <option value="not_started" className="bg-zinc-800">Not Started</option>
                    <option value="in_progress" className="bg-zinc-800">In Progress</option>
                    <option value="completed" className="bg-zinc-800">Completed</option>
                  </select>
                  <span className="flex-1 text-sm">{subtask.title}</span>
                  <button
                    onClick={() => handleDeleteSubtask(subtask._id)}
                    className="p-1.5 text-zinc-400 hover:text-red-400 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Attachments Section */}
          <div className="mt-10 border-t border-zinc-700/30 pt-8">
            <div className="flex items-center space-x-4 mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              <h3 className="text-2xl font-bold">Attachments</h3>
            </div>
            
            <div className="space-y-4">
              {/* File Upload Button */}
              <div className="flex justify-center">
                <label className="cursor-pointer group">
                  <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-800/70 transition-colors">
                    <svg className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="text-zinc-400 group-hover:text-emerald-400 transition-colors">Add Attachment</span>
                  </div>
                  <input type="file" className="hidden" />
                </label>
              </div>
              
              {/* Empty State */}
              <div className="text-center py-8">
                <p className="text-zinc-500 text-sm">No attachments yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
