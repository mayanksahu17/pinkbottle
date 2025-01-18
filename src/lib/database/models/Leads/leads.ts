// models/Subscription.ts
import mongoose from 'mongoose';
import { IUser } from '../User/types';
import { ProfileSchema } from '../Profile/profile';

const leadSchema = new mongoose.Schema<IUser>({
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
<<<<<<< HEAD
  profiles: [ProfileSchema], // Use the centralized ProfileSchema
});


const Lead =
  mongoose.models?.Lead || mongoose.model<IUser>('Lead', leadSchema, 'leads');
=======
  resume: {
    type: String,
  },
  coverLetter: {
    type: String,
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

const Lead = mongoose.models?.Lead || mongoose.model<IUser>('Lead', leadSchema, 'leads');
>>>>>>> updated_schema
export default Lead;
