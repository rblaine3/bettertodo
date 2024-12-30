import { ObjectId } from 'mongodb';

// User model
export interface IUser {
  _id: ObjectId;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  settings?: {
    theme: 'dark' | 'light';
    notifications: boolean;
    timezone: string;
  };
}

// Main Task model
export interface ITask {
  _id: ObjectId;
  userId: ObjectId;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed' | 'archived';
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  completedAt?: Date;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  // References to related collections
  substepsId?: ObjectId;
  contentId?: ObjectId;
  aiMetadataId?: ObjectId;
}

// Substeps collection - Separate for better performance with large lists
export interface ISubsteps {
  _id: ObjectId;
  taskId: ObjectId;
  userId: ObjectId;
  steps: {
    id: string;
    title: string;
    description?: string;
    status: 'pending' | 'completed';
    completedAt?: Date;
    order: number;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

// Task Content - Separate collection for rich content and attachments
export interface ITaskContent {
  _id: ObjectId;
  taskId: ObjectId;
  userId: ObjectId;
  notes: {
    id: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
  attachments: {
    id: string;
    type: 'image' | 'file' | 'link';
    url: string;
    name: string;
    size?: number;
    createdAt: Date;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

// AI Metadata - Stores AI-generated insights and metadata
export interface IAIMetadata {
  _id: ObjectId;
  taskId: ObjectId;
  userId: ObjectId;
  analysis: {
    complexity: number;
    estimatedDuration: number;
    suggestedDeadline?: Date;
    tags: string[];
    category?: string;
  };
  suggestions: {
    id: string;
    type: 'substep' | 'resource' | 'optimization';
    content: string;
    createdAt: Date;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

// Chat Messages - For AI interactions
export interface IChatMessage {
  _id: ObjectId;
  userId: ObjectId;
  taskId?: ObjectId; // Optional, if related to a specific task
  role: 'user' | 'assistant' | 'system';
  content: string;
  context?: {
    action: 'create_task' | 'edit_task' | 'create_substeps' | 'add_content' | 'general';
    taskId?: ObjectId;
    metadata?: Record<string, any>;
  };
  createdAt: Date;
}

// Chat Sessions - Groups related messages
export interface IChatSession {
  _id: ObjectId;
  userId: ObjectId;
  title: string;
  lastMessage: string;
  messageCount: number;
  createdAt: Date;
  updatedAt: Date;
  messages: ObjectId[]; // References to ChatMessage documents
}
