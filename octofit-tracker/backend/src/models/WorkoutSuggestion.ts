import mongoose, { Schema, Document } from 'mongoose';

export interface IWorkoutSuggestion extends Document {
  student: mongoose.Types.ObjectId;
  gym: mongoose.Types.ObjectId;
  workoutType: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  description: string;
  targetMuscles: string[];
  equipment: string[];
  caloriesEstimate: number;
  suggestedDate: Date;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const workoutSuggestionSchema = new Schema<IWorkoutSuggestion>(
  {
    student: {
      type: Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    gym: {
      type: Schema.Types.ObjectId,
      ref: 'GymTeacher',
      required: true,
    },
    workoutType: {
      type: String,
      required: true,
      enum: ['strength_training', 'cardio', 'flexibility', 'balance', 'mixed'],
    },
    difficulty: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      required: true,
    },
    duration: {
      type: Number,
      required: true,
      min: 5,
      max: 180,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    targetMuscles: [
      {
        type: String,
      },
    ],
    equipment: [
      {
        type: String,
      },
    ],
    caloriesEstimate: {
      type: Number,
      required: true,
      min: 0,
    },
    suggestedDate: {
      type: Date,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const WorkoutSuggestion = mongoose.model<IWorkoutSuggestion>('WorkoutSuggestion', workoutSuggestionSchema);

export default WorkoutSuggestion;
