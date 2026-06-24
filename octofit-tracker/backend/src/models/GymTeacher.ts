import mongoose, { Schema, Document } from 'mongoose';

export interface IGymTeacher extends Document {
  name: string;
  email: string;
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
  userRole: 'gym_teacher';
  specialization: string;
  studentCount: number;
  createdAt: Date;
  updatedAt: Date;
}

const gymTeacherSchema = new Schema<IGymTeacher>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    fitnessLevel: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'intermediate',
    },
    userRole: {
      type: String,
      enum: ['gym_teacher'],
      default: 'gym_teacher',
    },
    specialization: {
      type: String,
      required: true,
      trim: true,
    },
    studentCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const GymTeacher = mongoose.model<IGymTeacher>('GymTeacher', gymTeacherSchema);

export default GymTeacher;
