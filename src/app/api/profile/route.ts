import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/database/mongodb';
import Profile from '@/lib/database/models/Profile/profile';

// Connect to the database when the module is loaded
dbConnect(); 

// Handler for POST requests
export async function POST(request: NextRequest) {
  console.log("POST endpoint hit"); // Debug log to confirm endpoint is reached

  try {
    // Attempt to parse the incoming request data as JSON
    const profileData = await request.json();
    console.log("Profile data received:", profileData); // Log received data

    // Create a new profile instance
    const profile = new Profile(profileData);
    await profile.save();
    console.log("Profile saved successfully:", profile); // Log successful save

    // Return a success response
    return NextResponse.json({ message: 'Profile saved successfully' }, { status: 201 });

  } catch (error) {
    console.error('Error saving profile:', error); // Log any errors
    return NextResponse.json({ message: 'Error saving profile', error: error.message }, { status: 500 });
  }
}

// Handler for GET requests
export async function GET() {
  console.log("GET endpoint hit"); // Debug log to confirm endpoint is reached

  try {
    // Retrieve the first profile from the database
    const profile = await Profile.findOne();
    if (!profile) {
      console.log("No profile found"); // Log if no profile is found
      return NextResponse.json({ message: 'Profile not found' }, { status: 404 });
    }

    // Return the retrieved profile
    return NextResponse.json(profile, { status: 200 });
  } catch (error) {
    console.error('Error retrieving profile:', error); // Log any errors
    return NextResponse.json({ message: 'Error retrieving profile', error: error.message }, { status: 500 });
  }
}
