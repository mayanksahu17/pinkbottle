import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/database/mongodb';
import User from '@/lib/database/models/User/User'; 
import { ObjectId } from 'mongodb';

export async function PUT(request: Request) {
  try {
    const { id, status } = await request.json();

    if (!id || !status) {
      return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
    }

    // Connect to the database
    await dbConnect();

    // Update the job status in the database
    const result = await User.updateOne(
      { 'jobs._id': new ObjectId(id) }, // Find the job by its ObjectId
      { $set: { 'jobs.$.status': status } } // Update the status
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ message: 'Job not found or no changes made' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Job status updated successfully' });
  } catch (error) {
    console.error('Error updating job status:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
