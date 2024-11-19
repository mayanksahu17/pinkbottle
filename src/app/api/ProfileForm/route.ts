import { auth } from '@clerk/nextjs';
import { clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/database/mongodb';
import User from '@/lib/database/models/User/User';

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const clerkUser = await clerkClient.users.getUser(userId);
    if (!clerkUser) {
      return NextResponse.json({ error: 'Clerk User Not Found' }, { status: 404 });
    }

    const { profiles, profileIndex } = await req.json();

    await dbConnect();

    // Find or create user by clerkId
    let user = await User.findOne({ clerkId: userId });
    if (!user) {
      user = new User({ 
        clerkId: userId,
        email: clerkUser.emailAddresses[0]?.emailAddress,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        profiles: []
      });
    }

    // Update or add profile
    if (profileIndex !== undefined && 
        profileIndex >= 0 && 
        profileIndex < user.profiles.length) {
      user.profiles[profileIndex] = profiles[0];
    } else {
      user.profiles.push(profiles[0]);
    }

    await user.save();

    return NextResponse.json({ 
      message: 'Profile updated successfully',
      profileIndex: profileIndex ?? user.profiles.length - 1
    }, { status: 200 });

  } catch (error) {
    console.error('Profile Update Error:', error);
    return NextResponse.json({ 
      error: 'Internal Server Error', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}