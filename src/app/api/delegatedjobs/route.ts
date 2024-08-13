// import { NextResponse } from 'next/server';
// import dbConnect from '@/lib/database/dbConnect';
// import User from '@/lib/database/models/User';

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const clerkId = searchParams.get('clerkId');

//   await dbConnect();

//   const user = await User.findOne({ clerkId });
//   if (!user || !user.jobs) {
//     return NextResponse.json([]);
//   }

//   return NextResponse.json(user.jobs.filter(job => job.status === 'Delegated'));
// }
