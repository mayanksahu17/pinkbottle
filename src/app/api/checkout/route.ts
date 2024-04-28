import { NextRequest } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    try {
      const body = await req.json();
      const { priceId } = body;
      const { metadata } = body;      
      console.log(metadata);
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
          price: priceId,
          quantity: 1,
        }],
        mode: 'payment',
        metadata:{
          planName: metadata.name,
          planPrice: metadata.price,
          originalPrice: metadata.originalPrice,
          priceId: metadata.priceId,
          clerkId: metadata.userId
        },
        customer_email:"example@gmail.com",
        success_url: `${new URL(req.url).origin}/dashboard?success=true`,
        cancel_url: `${new URL(req.url).origin}/pricing?canceled=true`,
      });

      return new Response(JSON.stringify({ id: session.id }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (err: any) {
      return new Response(JSON.stringify({ statusCode: 500, message: err.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } else {
    return new Response(null, { status: 405, headers: { 'Allow': 'POST' } });
  }
}