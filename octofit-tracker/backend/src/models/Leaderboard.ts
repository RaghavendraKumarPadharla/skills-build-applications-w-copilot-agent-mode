import mongoose, { Schema, Document } from 'mongoose';

export interface ILeaderboard extends Document {
  student: mongoose.Types.ObjectId;
  rank: number;
  totalPoints: number;
  activitiesCompleted: number;
  averageCaloriesBurned: number;
  gym: mongoose.Types.ObjectId;
  lastUpdated: Date;
  createdAt: Date;
  updatedAt: Date;
}

const leaderboardSchema = new Schema<ILeaderboard>(
  {
    student: {
      type: Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    rank: {
      type: Number,
      required: true,
      min: 1,
    },
    totalPoints: {
      type: Number,
      default: 0,
    },
    activitiesCompleted: {
      type: Number,
      default: 0,
    },
    averageCaloriesBurned: {
      type: Number,
      default: 0,
    },
    gym: {
      type: Schema.Types.ObjectId,
      ref: 'GymTeacher',
      required: true,
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Leaderboard = mongoose.model<ILeaderboard>('Leaderboard', leaderboardSchema);

export default Leaderboard;
