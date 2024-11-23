import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/database/mongodb';
import User from '@/lib/database/models/User/User';

export async function GET(request: NextRequest) {
  // Use the authenticated user ID from Clerk's auth method
  const userId = request.headers.get('X-User-Id'); 
  //console.log("Fetching profiles for Clerk User ID:", userId);

  await dbConnect();

  try {

    const user = await User.findOne({ clerkId: userId }); // Use the authenticated user's ID

    if (!user) {
    //  console.error(`No user found with Clerk ID: ${userId}`);
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    //console.log("User profiles fetched:", user.profiles);
    return NextResponse.json({ profiles: user.profiles }, { status: 200 });
  } catch (error) {
    console.error('Error fetching profile:', error);
    return NextResponse.json({ error: 'Failed to fetch profile', details: error.message }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  const userId = request.headers.get('X-User-Id'); // Get user ID from headers

  //console.log("Authenticated User ID from Clerk:", userId);

  const updateData = await request.json();

// console.log("Update Data Received:", updateData);

  if (!updateData || typeof updateData !== 'object') {
    return NextResponse.json({ error: 'Invalid update data' }, { status: 400 });
  }

  try {
    await dbConnect();

    const user = await User.findOne({ clerkId: userId });

    //console.log("Fetched User from Mongo:", user);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const profile = user.profiles[0];

    if (!profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }

    let updatedExperiences = profile.experiences || [];

    if (updateData.experiences && updateData.experiences.experiences) {
      const incomingExperiences = updateData.experiences.experiences; // Extract nested array

      if (Array.isArray(incomingExperiences)) {
        incomingExperiences.forEach((newExperience) => {
          const existingExperienceIndex = updatedExperiences.findIndex(
            (exp) => exp._id.toString() === newExperience._id 
          );

          if (existingExperienceIndex >= 0) {
            // Update existing experience
            updatedExperiences[existingExperienceIndex] = {
              ...updatedExperiences[existingExperienceIndex],
              ...newExperience, 
            };
          } else {

            updatedExperiences.push(newExperience);
          }
        });
      } else {
        console.warn("Invalid nested experiences data. Expected an array.");
      }
    } else if (Array.isArray(updateData.experiences)) {
      updateData.experiences.forEach((newExperience) => {
        const existingExperienceIndex = updatedExperiences.findIndex(
          (exp) => exp._id.toString() === newExperience._id 
        );

        if (existingExperienceIndex >= 0) {
          updatedExperiences[existingExperienceIndex] = {
            ...updatedExperiences[existingExperienceIndex],
            ...newExperience, 
          };
        } else {
          updatedExperiences.push(newExperience);
        }
      });
    } else {
      console.warn("Invalid experiences data. Expected a nested or flat array.");
    }

    const updatedProfile = {
      ...profile,
      experiences: updatedExperiences,
      personalInfo: {
        ...profile.personalInfo,
        ...(updateData.personalInfo || {}),
      },
      rolesSkills: {
        ...profile.rolesSkills,
        ...(updateData.rolesSkills || {}),
      },
      expectations: {
        ...profile.expectations,
        ...(updateData.expectations || {}),
      },
      cv: {
        ...profile.cv,
        ...(updateData.cv || {}),
      },
      diversityInclusion: {
        ...profile.diversityInclusion,
        ...(updateData.diversityInclusion || {}),
      },
    };

    user.profiles[0] = updatedProfile;
    const updatedUser = await user.save();

   // console.log("Updated Profiles:", updatedUser.profiles);

    return NextResponse.json({ profiles: updatedUser.profiles }, { status: 200 });
  } catch (error) {
    console.error("Error updating profiles:", error);
    return NextResponse.json(
      { error: 'Failed to update profiles', details: error.message },
      { status: 500 }
    );
  }
}

