import { Stripe, StripeError, loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OvVvTACYURR6mEK1LiIoUnmAWcKKvUEg5u0NiyOl8DfXQsDGKnevsaW1peAMZEJ3lxVyyA8xg1xtXfFwT0LZ8Rt00n9CAHX7U');
export const handleCheckout = async () => {
  const stripe: Stripe | null = await stripePromise;
  const response: Response = await fetch('/api/checkout_sessions', { method: 'POST' });
  const session: { id: string } = await response.json();

  if (stripe) {
    const result: { error?: StripeError } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  }
};