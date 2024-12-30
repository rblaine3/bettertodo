import mongoose from 'mongoose';

/**
 * Schema for subtasks within a main task
 */
const SubTaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['not_started', 'in_progress', 'completed'],
    default: 'not_started'
  },
  createdAt: { type: Date, default: Date.now }
});

/**
 * Main task schema with all task-related fields
 */
const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { 
    type: String, 
    enum: ['pending', 'in_progress', 'completed', 'archived'],
    default: 'pending'
  },
  priority: { 
    type: String, 
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  dueDate: { type: Date },
  dueTime: { type: String },
  notes: { type: String },
  subTasks: [SubTaskSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Update the updatedAt timestamp before saving
TaskSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

const Task = mongoose.models.Task || mongoose.model('Task', TaskSchema);

export default Task;
