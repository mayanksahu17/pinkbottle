import { NextResponse, NextRequest } from 'next/server';
import { linkedinDbConnect } from '@/lib/database/linkedinmongo';
import { getAuth } from '@clerk/nextjs/server';

// Cache with TTL
let cache = {};
const CACHE_TTL = 5 * 60 * 1000; // Cache TTL: 5 minutes

export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if jobs are already in the cache and if they are still fresh
    const cachedData = cache[userId];
    const now = Date.now();

    if (cachedData && now - cachedData.timestamp < CACHE_TTL) {
      console.log('Returning cached jobs for userId:', userId);
      return NextResponse.json(cachedData.jobs, { status: 200 });
    }

    const linkedinConn = await linkedinDbConnect();
    const user = await linkedinConn.collection('users').findOne({ clerkId: userId });

    if (!user) {
      console.log('No jobs found for this user.');
      return NextResponse.json([], { status: 200 });
    }

    const jobs = user.jobs || [];

    // Store the jobs in the cache with a timestamp
    cache[userId] = { jobs, timestamp: now };

    return NextResponse.json(jobs, { status: 200 });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
