import mongoose, { Schema, Document } from 'mongoose';

export interface IActivity extends Document {
  student: mongoose.Types.ObjectId;
  activityType: string;
  duration: number;
  caloriesBurned: number;
  intensity: 'low' | 'medium' | 'high';
  points: number;
  date: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const activitySchema = new Schema<IActivity>(
  {
    student: {
      type: Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    activityType: {
      type: String,
      required: true,
      enum: ['running', 'cycling', 'swimming', 'strength_training', 'yoga', 'cardio', 'sports', 'other'],
    },
    duration: {
      type: Number,
      required: true,
      min: 1,
    },
    caloriesBurned: {
      type: Number,
      required: true,
      min: 0,
    },
    intensity: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    points: {
      type: Number,
      required: true,
      min: 0,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    notes: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Activity = mongoose.model<IActivity>('Activity', activitySchema);

export default Activity;
