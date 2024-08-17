import { NextResponse, NextRequest } from 'next/server';
import { linkedinDbConnect } from '@/lib/database/linkedinmongo';
import { getAuth } from '@clerk/nextjs/server';

// Cache with TTL
let cache = {};
const CACHE_TTL = 5 * 60 * 1000; // Cache TTL: 5 minutes

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check for nocache query parameter to bypass cache
    const { searchParams } = new URL(req.url);
    const bypassCache = searchParams.get('nocache') === 'true';

    const now = Date.now();
    const cachedData = cache[userId];

    // Return cached data if it's fresh and cache is not bypassed
    if (!bypassCache && cachedData && now - cachedData.timestamp < CACHE_TTL) {
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

    console.log('Returning fresh jobs for userId:', userId);
    return NextResponse.json(jobs, { status: 200 });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
