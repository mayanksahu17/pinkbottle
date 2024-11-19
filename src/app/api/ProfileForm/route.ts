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

    console.log('Checking for rolesSkills.skills array:', profiles[0]?.rolesSkills?.skills);
    console.log('Checking for rolesSkills.skills[0]:', profiles[0]?.rolesSkills?.skills?.[0]);
    console.log(
      'Checking for rolesSkills.skills[0].level:',
      profiles[0]?.rolesSkills?.skills?.[0]?.level
    );
        
    for (const field of requiredFields) {
      const keys = field.split('.');
      let value = profiles[0]; 
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
      user = new User({
        clerkId: userId,
        email: clerkUser.emailAddresses[0]?.emailAddress,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        profiles: [],
      });
    }

    if (!Array.isArray(user.profiles)) {
      user.profiles = [];
    }

    if (
      profileIndex !== undefined &&
      profileIndex >= 0 &&
      profileIndex < user.profiles.length
    ) {
      user.profiles[profileIndex] = profiles[0];
    } else {
      user.profiles.push(profiles[0]);
    }

    await user.save();

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
