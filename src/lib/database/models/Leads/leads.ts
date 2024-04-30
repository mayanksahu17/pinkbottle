// models/Subscription.ts
import mongoose from 'mongoose';
import { IUser } from '../User/types';

const leadSchema = new mongoose.Schema<IUser>({
  clerkId: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true
  },
  payment: {
    status: {
      type: String,
      enum : ["Paid", "Unpaid"],
      default: "Unpaid"
    },
  },
  jobs: [
    {
      image: String,
      title: String,
      position: String,
      date: Date,
      status: String
    }
  ],
  resume:{
    type: String,
  },
  coverLetter:{
    type: String
  }
});

const Lead = mongoose.models?.Lead || mongoose.model<IUser>('Lead', leadSchema, 'leads');
export default Lead;
