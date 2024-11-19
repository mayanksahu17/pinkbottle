import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/lib/database/mongodb'
import Profile from '@/lib/database/models/Profile/profile'

async function checkProfileExists(id: string) {
  try {
    const existingProfile = await Profile.findById(id)
    return !!existingProfile
  } catch {
    return false
  }
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id
  console.log("params",params)
  console.log("params ID",params.id);

  await dbConnect()

  try {
    const profile = await Profile.findById(id)
    if (!profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 })
    }
    return NextResponse.json(profile)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 })
  }
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id

  await dbConnect()

  try {
    // Check if profile already exists
    const exists = await checkProfileExists(id)
    if (exists) {
      return NextResponse.json(
        { error: 'Profile already exists. Use PATCH to update.' },
        { status: 400 }
      )
    }

    // Create new profile
    const profileData = await request.json()
    const newProfile = new Profile({
      _id: id,
      ...profileData,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    const savedProfile = await newProfile.save()
    return NextResponse.json(savedProfile, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create profile' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  await dbConnect();

  try {
    const updateData = await request.json();
    console.log("Received updateData payload:", JSON.stringify(updateData, null, 2));

    const existingProfile = await Profile.findById(id);
    if (!existingProfile) {
      console.log("Profile not found in the database for ID:", id);
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }

    console.log("Existing personalInfo before update:", JSON.stringify(existingProfile.personalInfo, null, 2));

    const updatedPersonalInfo = {
      ...existingProfile.personalInfo, 
      ...updateData.personalInfo,      
    };

    console.log("Updated personalInfo to be saved:", JSON.stringify(updatedPersonalInfo, null, 2));

    const updatedProfile = await Profile.findByIdAndUpdate(
      id,
      { $set: { personalInfo: updatedPersonalInfo } },
      { new: true }
    );

    console.log("Updated Profile after DB save:", JSON.stringify(updatedProfile, null, 2));

    return NextResponse.json(updatedProfile);
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
  }
}




