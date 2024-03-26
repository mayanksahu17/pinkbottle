// pages/api/stripe/payment/checkout_sessions.js
import Stripe from 'stripe';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
          price: 'YOUR_PRICE_ID', // Replace with your actual price ID from Stripe
          quantity: 1,
        }],
        mode: 'payment',
        success_url: 'http://localhost:3000/dashboard', // Your success URL
        cancel_url: 'http://localhost:3000/', // Your cancel URL
      });

      res.status(200).json({ sessionId: session.id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  } else {
    // Handle any other HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
