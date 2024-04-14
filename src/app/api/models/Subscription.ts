// models/Subscription.ts
import mongoose from 'mongoose';

interface ISubscription {
  userId: string;
  stripeCustomerId: string;
  stripeSubscriptionId: string;
  planId: string;
  planName: string;
  planPrice: number;
  startDate?: Date;
}

const subscriptionSchema = new mongoose.Schema<ISubscription>({
  userId: { type: String, required: true },
  stripeCustomerId: { type: String, required: true },
  stripeSubscriptionId: { type: String, required: true },
  planId: { type: String, required: true },
  planName: { type: String, required: true },
  planPrice: { type: Number, required: true },
  startDate: { type: Date, default: Date.now }
});

const Subscription = mongoose.model<ISubscription>('Subscription', subscriptionSchema);
export default Subscription;
