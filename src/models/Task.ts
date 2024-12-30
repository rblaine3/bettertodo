import mongoose, { Schema, Document } from 'mongoose';

export interface SubTask {
  title: string;
  completed: boolean;
  createdAt: Date;
}

export interface TaskNote {
  content: string;
  createdAt: Date;
}

export interface TaskAttachment {
  fileName: string;
  fileUrl: string;
  fileType: string;
  createdAt: Date;
}

export interface ITask extends Document {
  title: string;
  description?: string;
  status: 'pending' | 'in_progress' | 'completed' | 'archived';
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  tags: string[];
  subTasks: SubTask[];
  notes: TaskNote[];
  attachments: TaskAttachment[];
  userId?: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const SubTaskSchema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const TaskNoteSchema = new Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const TaskAttachmentSchema = new Schema({
  fileName: { type: String, required: true },
  fileUrl: { type: String, required: true },
  fileType: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
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
  dueDate: {
    type: Date
  },
  tags: [{
    type: String,
    trim: true
  }],
  subTasks: [SubTaskSchema],
  notes: [TaskNoteSchema],
  attachments: [TaskAttachmentSchema],
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false
  }
}, {
  timestamps: true
});

// Indexes
TaskSchema.index({ status: 1 });
TaskSchema.index({ dueDate: 1 });
TaskSchema.index({ tags: 1 });

export default mongoose.models.Task || mongoose.model<ITask>('Task', TaskSchema);
