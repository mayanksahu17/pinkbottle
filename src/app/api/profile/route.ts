import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/database/mongodb';
import User from '@/lib/database/models/User/User';
import { auth } from '@clerk/nextjs';

export async function GET(request: NextRequest) {
  // Use the authenticated user ID from Clerk's auth method
  const { userId } = auth(); // This gives you the authenticated user's ID
  console.log("Fetching profiles for Clerk User ID:", userId);

  await dbConnect();

  try {
    // Search for the user using the userId from Clerk
    const user = await User.findOne({ clerkId: userId }); // Use the authenticated user's ID

    if (!user) {
      console.error(`No user found with Clerk ID: ${userId}`);
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    console.log("User profiles fetched:", user.profiles);
    return NextResponse.json({ profiles: user.profiles }, { status: 200 });
  } catch (error) {
    console.error('Error fetching profile:', error);
    return NextResponse.json({ error: 'Failed to fetch profile', details: error.message }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  const { userId } = auth(); // Get the authenticated user's ID

  // Log the authenticated user ID
  console.log("Authenticated User ID from Clerk:", userId);

  const updateData = await request.json();

  if (!updateData || typeof updateData !== 'object') {
    return NextResponse.json({ error: 'Invalid update data' }, { status: 400 });
  }

  try {
    await dbConnect();

    // Find the user by the Clerk ID (using the authenticated user's ID)
    const user = await User.findOne({ clerkId: userId });

    console.log("Fetched User from Mongo:", user);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const profile = user.profiles[0];

    if (!profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }

    // Handle experience updates separately
    let updatedExperiences = profile.experiences || [];

    if (updateData.experiences) {
      // Loop over the new experiences
      updateData.experiences.forEach((newExperience: any) => {
        const existingExperienceIndex = updatedExperiences.findIndex(
          (exp) => exp._id === newExperience._id
        );

        if (existingExperienceIndex >= 0) {
          // Update the existing experience if _id matches
          updatedExperiences[existingExperienceIndex] = {
            ...updatedExperiences[existingExperienceIndex],
            ...newExperience, // Update fields with new data
          };
        } else {
          // Append the new experience if no match
          updatedExperiences.push(newExperience);
        }
      });
    }

    // Merge the incoming updateData with the existing profile data
    const updatedProfile = {
      ...profile,
      ...updateData, // This will only update the provided sections, leaving the rest intact
      personalInfo: {
        ...profile.personalInfo,
        ...updateData.personalInfo, // Only update the personalInfo section
      },
      rolesSkills: {
        ...profile.rolesSkills,
        ...updateData.rolesSkills, // Only update the rolesSkills section
      },
      expectations: {
        ...profile.expectations,
        ...updateData.expectations, // Only update the expectations section
      },
      experiences: updatedExperiences, // Use the updated experiences array
      cv: {
        ...profile.cv,
        ...updateData.cv, // Only update the cv section
      },
      diversityInclusion: {
        ...profile.diversityInclusion,
        ...updateData.diversityInclusion, // Only update the diversityInclusion section
      },
    };

    // Replace the old profile data with the updated data
    user.profiles[0] = updatedProfile;

    // Save the updated user document
    const updatedUser = await user.save();

    // Log the updated profiles array
    console.log("Updated Profiles:", updatedUser.profiles);

    // Return the updated profiles array
    return NextResponse.json({ profiles: updatedUser.profiles }, { status: 200 });
  } catch (error) {
    // Log any errors that occur during the update
    console.error("Error updating profiles:", error);

    // Return a 500 status with the error message
    return NextResponse.json({ error: 'Failed to update profiles', details: error.message }, { status: 500 });
  }
}
