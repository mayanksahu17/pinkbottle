import mongoose from 'mongoose';
import { ProfileSchema } from '../Profile/profile';
import { IUser } from '@/lib/types';

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
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
  profiles: [ProfileSchema],
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
