import { NextResponse, NextRequest } from 'next/server';
import { linkedinDbConnect } from '@/lib/database/linkedinmongo';
import { getAuth } from '@clerk/nextjs/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const linkedinConn = await linkedinDbConnect();
    const user = await linkedinConn.collection('users').findOne({ clerkId: userId });

    if (!user) {
      console.log('No jobs found for this user.');
      return NextResponse.json([], { status: 200 });
    }

    const jobs = user.jobs || [];
    console.log('Returning fresh jobs for userId:', userId);

    return NextResponse.json(jobs, { status: 200 });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
