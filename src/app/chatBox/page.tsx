import { auth, currentUser } from "@clerk/nextjs";
import React from "react";

import { ChatBox } from "@/components/chat-box";
export default function Dashboard() {
    return (
      <main>
        <ChatBox /> {/* Correct component usage */}
      </main>
    );
  }