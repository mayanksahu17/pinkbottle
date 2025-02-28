import { clerkClient } from '@clerk/clerk-sdk-node';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  const stripeToken = req.nextUrl.searchParams.get('stripeToken');
  const userId = req.nextUrl.searchParams.get('userId');

  if (stripeToken && stripeToken === process.env.STRIPE_CALLBACK_SECRET) {
    if (!userId) {
      console.error('User ID is missing from the query');
      return NextResponse.redirect(new URL('/pricing', req.url));
    }

    try {
      const user = await clerkClient.users.getUser(userId);
      await clerkClient.users.updateUser(userId, {
        publicMetadata: { isPaid: true },
      });
      return NextResponse.redirect(new URL('/dashboard', req.url));
    } catch (error) {
      console.error('Failed to update user metadata:', error);
      return NextResponse.redirect(new URL('/pricing', req.url));
    }
  }
  // Add a default return statement for when the stripeToken condition isn't met
  return NextResponse.redirect(new URL('/pricing', req.url));
}