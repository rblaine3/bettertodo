import mongoose, { Schema, Document } from 'mongoose';

interface INote {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IAttachment {
  id: string;
  type: 'image' | 'file' | 'link';
  url: string;
  name: string;
  size?: number;
  createdAt: Date;
}

export interface ITaskContent extends Document {
  taskId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  notes: INote[];
  attachments: IAttachment[];
  createdAt: Date;
  updatedAt: Date;
}

const NoteSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const AttachmentSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['image', 'file', 'link'],
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TaskContentSchema = new Schema({
  taskId: {
    type: Schema.Types.ObjectId,
    ref: 'Task',
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  notes: [NoteSchema],
  attachments: [AttachmentSchema],
}, {
  timestamps: true,
});

// Indexes
TaskContentSchema.index({ taskId: 1 });
TaskContentSchema.index({ userId: 1 });

export default mongoose.models.TaskContent || mongoose.model<ITaskContent>('TaskContent', TaskContentSchema);
