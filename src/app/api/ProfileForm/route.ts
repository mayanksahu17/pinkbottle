import { auth } from '@clerk/nextjs';
import { clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/database/mongodb';
import User from '@/lib/database/models/User/User';
import { log } from 'node:console';

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    console.log(userId);
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const clerkUser = await clerkClient.users.getUser(userId);
    if (!clerkUser) {
      return NextResponse.json({ error: 'Clerk User Not Found' }, { status: 404 });
    }

    const { profiles, profileIndex } = await req.json();
    console.log('Profiles received:', profiles);
    console.log('Profile to update at index:', profileIndex);

    if (!profiles || !Array.isArray(profiles) || profiles.length === 0) {
      return NextResponse.json({ error: 'Invalid profile data' }, { status: 400 });
    }

    const requiredFields = [
      'personalInfo.fullName',
      'personalInfo.profilePhoto',
      'personalInfo.email',
      'personalInfo.location',
      'personalInfo.address',
      'personalInfo.phone',
      'rolesSkills.title',
      'expectations.hourlyRate',
      'expectations.availability',
      'expectations.rightToWork',
      'expectations.securityClearance',
      'cv.resume',
      'diversityInclusion.gender',
      'diversityInclusion.pronouns',
      'diversityInclusion.ethnicity',
    ];
    
    for (const field of requiredFields) {
      const keys = field.split('.');
      let value = profiles[0];
      
      // Special handling for experiences array
      if (field === 'experiences') {
        if (!Array.isArray(value.experiences)) {
          value.experiences = [];
        }
        continue; // Skip further validation for experiences array
      }
      
      for (const key of keys) {
        if (Array.isArray(value) && key.includes('[')) {
          const [arrayKey, index] = key.replace(']', '').split('[');
          value = value[arrayKey]?.[parseInt(index, 10)];
        } else if (value && typeof value === 'object') {
          value = value[key];
        } else {
          value = undefined;
          break;
        }
      }
    
      console.log(`Validating field: ${field}, Current value:`, value);
    
      if (value === undefined || value === null) {
        console.error(`Missing required field: ${field}`);
        return NextResponse.json(
          { error: `Field ${field} is required` },
          { status: 400 }
        );
      }
    }
            
    await dbConnect();

    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      const userEmail = clerkUser.emailAddresses[0]?.emailAddress;
      user = await User.findOne({ email: userEmail });
      
      // If user exists with email but different clerkId, update the clerkId
      if (user) {
        user.clerkId = userId;
      } else {
        // Only create new user if no user exists with either clerkId or email
        user = new User({
          clerkId: userId,
          email: userEmail,
          firstName: clerkUser.firstName,
          lastName: clerkUser.lastName,
          profiles: [],
        });
      }
    }

    if (!Array.isArray(user.profiles)) {
      user.profiles = [];
    }

    // Ensure experiences array exists and is properly structured
    if (!Array.isArray(profiles[0].experiences)) {
      profiles[0].experiences = [];
    }

    if (
      profileIndex !== undefined &&
      profileIndex >= 0 &&
      profileIndex < user.profiles.length
    ) {
      // Preserve existing experiences if none provided in update
      if (!profiles[0].experiences.length && user.profiles[profileIndex].experiences) {
        profiles[0].experiences = user.profiles[profileIndex].experiences;
      }
      user.profiles[profileIndex] = profiles[0];
    } else {
      user.profiles.push(profiles[0]);
    }
    console.log('Modified user document:', JSON.stringify(user.toObject(), null, 2));


try {
      const savedUser = await user.save();
      console.log('Save operation completed');
      console.log('Saved user document:', JSON.stringify(savedUser.toObject(), null, 2));
  
} catch (saveError) {
  console.error('Save operation failed:', saveError);
  return NextResponse.json(
    { error: 'Failed to save user data', details: saveError.message },
    { status: 500 }
  );
}
    return NextResponse.json(
      {
        message: 'Profile updated successfully',
        profileIndex: profileIndex ?? user.profiles.length - 1,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Profile Update Error:', error);
    return NextResponse.json(
      {
        error: 'Internal Server Error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}