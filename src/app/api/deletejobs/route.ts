import { NextResponse, NextRequest } from 'next/server';
import { linkedinDbConnect } from '@/lib/database/linkedinmongo';
import { getAuth } from '@clerk/nextjs/server';
import { cache } from 'react';

export const dynamic = 'force-dynamic';

export async function DELETE(req: NextRequest) {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { jobIds } = body;

    if (!Array.isArray(jobIds) || jobIds.length === 0) {
      return NextResponse.json({ error: 'Invalid job IDs' }, { status: 400 });
    }

    const linkedinConn = await linkedinDbConnect();
    const user = await linkedinConn.collection('users').findOne({ clerkId: userId });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const updatedJobs = (user.jobs || []).filter((job) => {
      const jobIdentifier = `${job.title}-${job.company}`;
      return !jobIds.includes(jobIdentifier);
    });
        
    await linkedinConn.collection('users').updateOne(
      { clerkId: userId },
      { $set: { jobs: updatedJobs } }
    );

    // Invalidate the cache for this user
    if (cache[userId]) {
      cache[userId] = { jobs: updatedJobs, timestamp: Date.now() };
    }

    return NextResponse.json({ success: true, message: 'Jobs deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting jobs:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
