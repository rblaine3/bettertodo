import { format } from 'date-fns';

interface ITask {
  _id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  tags: string[];
  completed: boolean;
}

interface TaskCardProps {
  task: ITask;
  onComplete: (taskId: string) => void;
}

const priorityClasses = {
  low: 'priority-low',
  medium: 'priority-medium',
  high: 'priority-high',
};

export default function TaskCard({ task, onComplete }: TaskCardProps) {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-3">
        <div className="flex-1 min-w-0">
          <div className="text-lg font-semibold truncate">{task.title}</div>
        </div>
        <span className={`ml-2 px-3 py-1 rounded-full text-sm font-medium ${priorityClasses[task.priority]}`}>
          {task.priority}
        </span>
      </div>
      
      {task.description && (
        <p className="text-zinc-400 mb-4">{task.description}</p>
      )}
      
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {task.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="text-sm text-zinc-500">
          {format(new Date(task.dueDate), 'MMM d, yyyy')}
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => onComplete(task._id)}
          className={`button ${task.completed ? 'bg-zinc-700' : ''}`}
        >
          {task.completed ? 'Completed' : 'Mark Complete'}
        </button>
      </div>
    </div>
  );
}
