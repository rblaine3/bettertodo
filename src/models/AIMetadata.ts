import mongoose, { Schema, Document } from 'mongoose';

interface IAnalysis {
  complexity: number;
  estimatedDuration: number;
  suggestedDeadline?: Date;
  tags: string[];
  category?: string;
}

interface ISuggestion {
  id: string;
  type: 'substep' | 'resource' | 'optimization';
  content: string;
  createdAt: Date;
}

export interface IAIMetadata extends Document {
  taskId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  analysis: IAnalysis;
  suggestions: ISuggestion[];
  createdAt: Date;
  updatedAt: Date;
}

const AnalysisSchema = new Schema({
  complexity: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  estimatedDuration: {
    type: Number, // in minutes
    required: true,
  },
  suggestedDeadline: {
    type: Date,
  },
  tags: [{
    type: String,
    trim: true,
  }],
  category: {
    type: String,
    trim: true,
  },
});

const SuggestionSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['substep', 'resource', 'optimization'],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const AIMetadataSchema = new Schema({
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
  analysis: {
    type: AnalysisSchema,
    required: true,
  },
  suggestions: [SuggestionSchema],
}, {
  timestamps: true,
});

// Indexes
AIMetadataSchema.index({ taskId: 1 });
AIMetadataSchema.index({ userId: 1 });
AIMetadataSchema.index({ 'analysis.complexity': 1 });
AIMetadataSchema.index({ 'analysis.tags': 1 });

export default mongoose.models.AIMetadata || mongoose.model<IAIMetadata>('AIMetadata', AIMetadataSchema);
