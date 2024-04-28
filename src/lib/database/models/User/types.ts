import { ISubscription } from "../Subscription/types";

export type Jobs = {
  _id?: string;
  image: string;
  title: string;
  position: string;
  date: Date;
  status: string
}

export interface IUser {
    clerkId: string;
    firstName: string;
    lastName: string;
    email: string;
    payment: {
      status: "Paid" | "Unpaid";
      subscription: ISubscription;
    };
    jobs: Jobs[];
    resume: string;
    coverLetter: string
  }