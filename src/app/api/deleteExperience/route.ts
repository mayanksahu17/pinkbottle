import { NextRequest, NextResponse } from 'next/server';
import User from "@/lib/database/models/User/User"; 
import { dbConnect } from '@/lib/database/mongodb';

export default async function DELETE(request: NextRequest, response: NextResponse) {
  try {
    // Get the Clerk User ID from the request headers
    const userId = request.headers.get('X-User-Id');  

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    await dbConnect();  // Ensure the database is connected

    // Extract experienceId from the request query parameters (or JSON body)
    const { searchParams } = new URL(request.url);
    const experienceId = searchParams.get('experienceId');

    if (!experienceId) {
      return NextResponse.json({ error: 'Experience ID is required' }, { status: 400 });
    }

    // Find the user by their Clerk ID
    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Iterate through the user's profiles to find the experience
    let experienceDeleted = false;

    for (let profile of user.profiles) {
      // Check if the experience exists in the profile's experiences array
      const experienceIndex = profile.experiences.findIndex((exp) => exp._id.toString() === experienceId);

      if (experienceIndex !== -1) {
        // Remove the experience by index
        profile.experiences.splice(experienceIndex, 1);
        experienceDeleted = true;
        break;
      }
    }

    if (!experienceDeleted) {
      return NextResponse.json({ error: 'Experience not found' }, { status: 404 });
    }

    // Save the updated user document
    await user.save();

    return NextResponse.json({ message: 'Experience deleted successfully' }, { status: 200 });

  } catch (error) {
    console.error("Error deleting experience:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
