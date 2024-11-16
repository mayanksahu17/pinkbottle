import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/database/mongodb';
import Profile from '@/lib/database/models/Profile/profile';

// Connect to the database when the module is loaded
dbConnect(); 

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Transform the flat form data into the required schema structure
    const profileData = {
      personalInfo: {
        fullName: formData.fullName,
        email: formData.email,
        location: formData.location,
        phone: formData.phone,
        profilePhoto: formData.profilePhoto
      },
      rolesSkills: {
        primaryRole: formData.primaryRole,
        skills: formData.skills,
        title: formData.title
      },
      expectations: {
        hourlyRate: formData.hourlyRate,
        availability: formData.availability,
        workPreference: formData.workPreference
      },
      experience: formData.experiences,
      cv: formData.resume,
      diversityInclusion: {
        gender: formData.gender,
        pronouns: formData.pronouns,
        ethnicity: formData.ethnicity
      }
    };

    const profile = new Profile(profileData);
    await profile.save();

    return NextResponse.json({ 
      message: 'Profile saved successfully',
      profile 
    }, { status: 201 });

  } catch (error) {
    console.error('Error saving profile:', error);
    return NextResponse.json({ 
      error: 'Failed to save profile',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
