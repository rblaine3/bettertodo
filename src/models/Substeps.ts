import mongoose, { Schema, Document } from 'mongoose';

interface IStep {
  id: string;
  title: string;
  description?: string;
  status: 'pending' | 'completed';
  completedAt?: Date;
  order: number;
}

export interface ISubsteps extends Document {
  taskId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  steps: IStep[];
  createdAt: Date;
  updatedAt: Date;
}

const StepSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending',
  },
  completedAt: {
    type: Date,
  },
  order: {
    type: Number,
    required: true,
  },
});

const SubstepsSchema = new Schema({
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
  steps: [StepSchema],
}, {
  timestamps: true,
});

// Indexes
SubstepsSchema.index({ taskId: 1 });
SubstepsSchema.index({ userId: 1 });

export default mongoose.models.Substeps || mongoose.model<ISubsteps>('Substeps', SubstepsSchema);
