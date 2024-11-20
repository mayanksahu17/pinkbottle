import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/lib/database/mongodb'
import User from '@/lib/database/models/User/User'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  console.log("Fetching profiles for Clerk ID:", id);

  await dbConnect();

  try {
    const user = await User.findOne({ clerkId: id });

    if (!user) {
      console.error(`No user found with Clerk ID: ${id}`);
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    console.log("User profiles fetched:", user.profiles);
    return NextResponse.json({ profiles: user.profiles }, { status: 200 });
  } catch (error) {
    console.error('Error fetching profile:', error);
    return NextResponse.json({ error: 'Failed to fetch profile', details: error.message }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params; 
  await dbConnect();

  try {
    const { profileIndex, updateData } = await request.json(); 

    const user = await User.findOne({ clerkId: id });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (!user.profiles || user.profiles.length <= profileIndex || profileIndex < 0) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }

    user.profiles[profileIndex] = {
      ...user.profiles[profileIndex],
      ...updateData, 
    };

    await user.save();

    return NextResponse.json(user.profiles[profileIndex], { status: 200 }); 
  } catch (error) {
    console.error('Error updating profile:', error);
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
  }
}




