import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
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

const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  settings: {
    theme: {
      type: String,
      enum: ['dark', 'light'],
      default: 'dark',
    },
    notifications: {
      type: Boolean,
      default: true,
    },
    timezone: {
      type: String,
      default: 'UTC',
    },
  },
}, {
  timestamps: true,
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
