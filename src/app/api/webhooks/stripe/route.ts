import stripe from "stripe";
import { NextResponse } from "next/server";
import { updateStudent } from "@/lib/actions/users/user.actions";

export async function POST(request: Request) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature") as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!; //store the webhook secret in the env file
  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    return NextResponse.json({ message: "Webhook error", error: err });
  }

  const eventType = event.type;
  console.log("Event Type", eventType);

  switch (eventType) {
    case "checkout.session.async_payment_succeeded":
      const checkoutSessionAsyncPaymentSucceeded = event.data.object;
      // Then define and call a function to handle the event checkout.session.async_payment_succeeded
      break;
    case "checkout.session.completed":
      const checkoutSessionCompleted = event.data.object;
      const id = event?.data?.object?.metadata?.clerkId;
      // create a new document using subscription schema here and refer it to the user document created below
      const user = await updateStudent({id:id!, updateDetails:{ payment:{status:"Paid"}} });
      if(user.success){
        return NextResponse.json({message:'OK', data: user})
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return new Response("", { status: 200 });
}
