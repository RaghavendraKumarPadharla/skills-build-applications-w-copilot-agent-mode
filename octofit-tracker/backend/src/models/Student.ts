import mongoose, { Schema, Document } from 'mongoose';

export interface IStudent extends Document {
  name: string;
  email: string;
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
  userRole: 'student';
  gym?: mongoose.Types.ObjectId;
  team?: mongoose.Types.ObjectId;
  totalPoints: number;
  workoutCount: number;
  createdAt: Date;
  updatedAt: Date;
}

const studentSchema = new Schema<IStudent>(
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
      default: 'beginner',
    },
    userRole: {
      type: String,
      enum: ['student'],
      default: 'student',
    },
    gym: {
      type: Schema.Types.ObjectId,
      ref: 'GymTeacher',
    },
    team: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
    },
    totalPoints: {
      type: Number,
      default: 0,
    },
    workoutCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Student = mongoose.model<IStudent>('Student', studentSchema);

export default Student;
