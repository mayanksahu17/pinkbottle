// models/Subscription.ts
import mongoose from 'mongoose';
import { ISubscription } from './types';

const subscriptionSchema = new mongoose.Schema<ISubscription>({
  // userId: { type: String, required: true },
  stripeCustomerId: { type: String, required: true },
  stripeSubscriptionId: { type: String, required: true },
  planId: { type: String, required: true },
  planName: { type: String, required: true },
  planPrice: { type: Number, required: true },
  startDate: { type: Date, default: Date.now },
});

const Subscription = mongoose.model<ISubscription>(
  'Subscription',
  subscriptionSchema
);
export default Subscription;
