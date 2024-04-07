import { auth, currentUser } from "@clerk/nextjs";
import React from "react";

import JobsApplied from "@/components/ui/jobs"
export default function Dashboard() {
    return (
      <main>
        <JobsApplied /> {/* Correct component usage */}
      </main>
    );
  }