import { auth, currentUser } from "@clerk/nextjs";
import React from "react";

import Working from "@/components/ui/working.client"
export default function Works() {
    return (
      <main>
        <Working />
      </main>
    );
  }