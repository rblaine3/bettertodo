'use client';

import { useState, useEffect } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, addMonths, subMonths, startOfWeek, endOfWeek } from 'date-fns';
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

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/tasks');
      if (!response.ok) throw new Error('Failed to fetch tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 }); // Start on Sunday
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 }); // End on Saturday
  const calendarDays = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  const getTasksForDate = (date: Date) => {
    return tasks.filter(task => {
      if (!task.dueDate) return false;
      // task.dueDate is already a Date object from MongoDB
      return format(new Date(task.dueDate), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd');
    });
  };

  const handlePrevMonth = () => {
    setCurrentDate(prev => subMonths(prev, 1));
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => addMonths(prev, 1));
    setSelectedDate(null);
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-200 border-l-2 border-red-500';
      case 'medium': return 'bg-yellow-500/20 text-yellow-200 border-l-2 border-yellow-500';
      case 'low': return 'bg-green-500/20 text-green-200 border-l-2 border-green-500';
      default: return 'bg-zinc-700/30 text-zinc-300 border-l-2 border-zinc-500';
    }
  };

  return (
    <div className="min-h-full">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Calendar</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrevMonth}
              className="p-2 hover:bg-zinc-800/50 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-lg font-medium">
              {format(currentDate, 'MMMM yyyy')}
            </span>
            <button
              onClick={handleNextMonth}
              className="p-2 hover:bg-zinc-800/50 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-px bg-zinc-800/30 rounded-lg overflow-hidden">
          {/* Day Headers */}
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="bg-zinc-800/50 p-1.5 text-center text-[11px] font-medium">
              {day}
            </div>
          ))}

          {/* Calendar Days */}
          {calendarDays.map((day, index) => {
            const dayTasks = getTasksForDate(day);
            const isSelected = selectedDate && format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
            
            return (
              <div
                key={day.toString()}
                className={`min-h-[100px] relative
                  ${!isSameMonth(day, currentDate) ? 'bg-zinc-900/50 text-zinc-600' : 'bg-zinc-800/30'}
                  ${isToday(day) ? 'font-bold' : ''}
                  ${isSelected ? 'bg-blue-900/30' : ''}
                `}
              >
                <button
                  onClick={() => handleDateClick(day)}
                  className="absolute inset-0 w-full h-full hover:bg-zinc-800/50 transition-colors z-10"
                />
                <div className="relative z-0 p-1.5 flex flex-col h-full pointer-events-none">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs ${isToday(day) ? 'bg-blue-500 text-white w-5 h-5 rounded-full inline-flex items-center justify-center' : ''}`}>
                      {format(day, 'd')}
                    </span>
                    {dayTasks.length > 3 && (
                      <span className="text-[10px] text-zinc-400">
                        +{dayTasks.length - 2}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 space-y-0.5 min-h-0 overflow-hidden">
                    {dayTasks.slice(0, 3).map((task, i) => (
                      <Link
                        key={task._id}
                        href={`/tasks/${task._id}`}
                        className={`block text-[10px] leading-tight truncate rounded px-1 py-0.5 hover:opacity-80 transition-opacity relative z-20 ${getPriorityColor(task.priority)}`}
                        title={`${task.title}${task.dueTime ? ` at ${task.dueTime}` : ''}`}
                      >
                        {task.dueTime && (
                          <span className="mr-1 text-[9px] opacity-75 font-medium">{task.dueTime}</span>
                        )}
                        {task.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Date Tasks */}
        {selectedDate && (
          <div className="mt-8 bg-zinc-800/30 rounded-lg p-4">
            <h2 className="text-lg font-medium mb-4">
              Tasks for {format(selectedDate, 'MMMM d, yyyy')}
            </h2>
            <div className="space-y-3 max-h-[300px] overflow-y-auto">
              {getTasksForDate(selectedDate).length === 0 ? (
                <p className="text-zinc-400">No tasks scheduled for this day</p>
              ) : (
                getTasksForDate(selectedDate).map(task => (
                  <Link
                    key={task._id}
                    href={`/tasks/${task._id}`}
                    className="block bg-zinc-800/50 rounded-lg p-3 hover:bg-zinc-700/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium mb-1">{task.title}</h3>
                        {task.description && (
                          <p className="text-sm text-zinc-400 line-clamp-2 mb-2">
                            {task.description}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2">
                          <span className={`px-2 py-1 text-xs rounded-md ${getPriorityColor(task.priority)}`}>
                            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
                          </span>
                          {task.dueTime && (
                            <span className="px-2 py-1 text-xs rounded-md bg-zinc-800/50 text-zinc-300">
                              Due at {task.dueTime}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
