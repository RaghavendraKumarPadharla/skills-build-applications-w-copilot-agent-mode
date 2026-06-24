import mongoose, { Schema, Document } from 'mongoose';

export interface ITeam extends Document {
  name: string;
  description?: string;
  leader: mongoose.Types.ObjectId;
  members: mongoose.Types.ObjectId[];
  gym: mongoose.Types.ObjectId;
  totalPoints: number;
  createdAt: Date;
  updatedAt: Date;
}

const teamSchema = new Schema<ITeam>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    leader: {
      type: Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Student',
      },
    ],
    gym: {
      type: Schema.Types.ObjectId,
      ref: 'GymTeacher',
      required: true,
    },
    totalPoints: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Team = mongoose.model<ITeam>('Team', teamSchema);

export default Team;
