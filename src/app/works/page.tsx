import { auth, currentUser } from "@clerk/nextjs";
import React from "react";

import Working from "@/components/ui/working.client"
export default function Dashboard() {
    return (
      <main>
        <Working />
      </main>
    );
  }