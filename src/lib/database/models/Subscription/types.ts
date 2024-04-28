export interface ISubscription {
    // userId: string;
    stripeCustomerId: string;
    stripeSubscriptionId: string;
    planId: string;
    planName: string;
    planPrice: number;
    startDate?: Date;
  }