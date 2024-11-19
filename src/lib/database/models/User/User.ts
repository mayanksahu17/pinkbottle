import mongoose from 'mongoose';
import { ProfileSchema } from '../Profile/profile';

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
  resume: {
    type: String,
  },
  coverLetter: {
    type: String,
  },
  profiles: [ProfileSchema], // Use the centralized ProfileSchema
});

const User = mongoose.models?.User || mongoose.model('User', userSchema);

export default User;
