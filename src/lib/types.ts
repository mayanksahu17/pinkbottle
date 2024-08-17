import { ISubscription } from '../lib/database/models/Subscription/types';

export type Jobs = {
  [x: string]: string | undefined;
  _id?: string;
  image: string;
  title: string;
  position: string;
  date: string;
  status: string;
  location:string;
};

export interface IUser {
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