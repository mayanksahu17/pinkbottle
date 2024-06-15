import { auth, currentUser } from "@clerk/nextjs";
import React from "react";
import JobsApplied from "@/components/ui/jobs"
import { getStudentById } from "@/lib/actions/users/user.actions";
export default async function Dashboard() {
    const {sessionClaims} = auth();
    const userID = (sessionClaims?.userID || sessionClaims?.sub) as string;
    console.log("Called from Job Page" ,sessionClaims);
    const user = await getStudentById(userID);
    const jobs = user?.data.jobs;        
    return (
      <main>
        <JobsApplied jobs={jobs} /> {/* Correct component usage */}
      </main>
    );
  }