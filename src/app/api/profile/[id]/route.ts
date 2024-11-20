import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/lib/database/mongodb'
import User from '@/lib/database/models/User/User'
import { auth } from '@clerk/nextjs';

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

/*export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const {id} = params;

  console.log('Received ID:', params.id);

  if (!id) {
    return NextResponse.json({ error: 'Clerk ID is required' }, { status: 400 });
  }

  await dbConnect();

  try {
    //parsing the incoming data
    const updateData = await request.json(); 

    // Find the user by Clerk ID and update their profile
    const updatedUser = await User.findOneAndUpdate(
      { id },
      { $set: updateData }, // Apply the updates
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Profile updated successfully', user: updatedUser }, { status: 200 });
  } catch (error) {
    console.error('Error updating profile:', error);
    return NextResponse.json({ error: 'Failed to update profile', details: error.message }, { status: 500 });
  }
}*/

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const clerkId = params.id;
  const { userId } = auth();

  // Log incoming Clerk ID and the authenticated user ID
  console.log("Clerk ID from URL:", clerkId);
  console.log("Authenticated User ID from Clerk:", userId);

  const updateData = await request.json();
  console.log("updated data before patch",updateData)

  if (!updateData || typeof updateData !== 'object') {
    return NextResponse.json({ error: 'Invalid update data' }, { status: 400 });
  }

  try {
    await dbConnect();

    const user = await User.findOne({ clerkId });

    console.log("Fetched User from Mongo:", user);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const profile = user.profiles[0];

    if (!profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }

    // If experiences are provided in the updateData, update them
    if (updateData.experiences && Array.isArray(updateData.experiences)) {
      // Iterate over incoming experiences and update or add them
      const updatedExperiences = profile.experiences.map((exp) => {
        const updatedExp = updateData.experiences.find((newExp) => newExp._id === exp._id);

        // If we find a matching experience, merge the data, otherwise keep the old one
        if (updatedExp) {
          return { ...exp, ...updatedExp };
        }

        return exp;
      });

      // Add any new experiences that don't already exist in the current profile
      const newExperiences = updateData.experiences.filter((newExp) =>
        !profile.experiences.some((exp) => exp._id === newExp._id)
      );

      // Merge updated and new experiences
      profile.experiences = [...updatedExperiences, ...newExperiences];
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
