import { ISubscription } from '../Subscription/types';
import { Document } from 'mongoose';

export type Jobs = {
  [x: string]: string;
  _id?: string;
  image: string;
  title: string;
  position: string;
  date: string;
  status: string;
  location:string;
};

export interface IUser extends Document{
  clerkId: string;
  firstName: string;
  lastName: string;
  email: string;
  payment: {
    status: 'Paid' | 'Unpaid';
    subscription: ISubscription;
  };
  jobs: Jobs[];
  resume: string;
  coverLetter: string;
}
