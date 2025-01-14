// models/Subscription.ts
import mongoose from 'mongoose';
import Subscription from '../Subscription/Subscription';
import { IUser } from './types';

const userSchema = new mongoose.Schema<IUser>({
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
    unique: true,
  },
  payment: {
    status: {
      type: String,
      enum: ['Paid', 'Unpaid'],
      default: 'Unpaid',
    },
    // subscription: {
    //   type: mongoose.Types.ObjectId,
    //   ref: Subscription
    // }
  },
  jobs: [
    {
      image: String,
      title: String,
      position: String,
      date: Date,
      status: String,
      location: String,
    },
  ],
  resume: {
    type: String,
  },
  coverLetter: {
    type: String,
  },
  status : {
    type : String,
    enum : ['active', 'inactive','FT'],
    default : 'inactive'
  },
  isRenewal : {
    type : Boolean,
    default : false
  },
  plan : {
  type : String,
  default : 'none'
  }
});

const User =
  mongoose.models?.User || mongoose.model<IUser>('User', userSchema, 'users');
export default User;