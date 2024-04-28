import { createStudent, deleteStudent, updateStudent } from "@/lib/actions/users/user.actions";
import { prisma } from "../../../../../lib/db";
import { clerkClient } from "@clerk/nextjs/server";
import { IncomingHttpHeaders } from "http";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook, WebhookRequiredHeaders } from "svix";

const webhookSecret = process.env.WEBHOOK_SECRET || "";

async function handler(request: Request) {
  console.log('Webhooks users route reached', request.method, request.url);
    const payload = await request.json();
    const headersList = new Headers(request.headers);
    const heads = {
      "svix-id": headersList.get("svix-id"),
      "svix-timestamp": headersList.get("svix-timestamp"),
      "svix-signature": headersList.get("svix-signature"),
    };
    const wh = new Webhook(webhookSecret);
    let evt: Event | null = null;
  
    try {
      evt = wh.verify(
        JSON.stringify(payload),
        heads as IncomingHttpHeaders & WebhookRequiredHeaders
      ) as Event;
    } catch (err) {
      console.error((err as Error).message);
      return new NextResponse(JSON.stringify({ error: "Webhook verification failed" }), { status: 400 });
    }
  
    const eventType: EventType = evt.type;
    if (eventType === "user.created"){
      const {id, email_addresses, first_name, last_name } = evt.data;
      const user = {
        clerkId: id,
        email: email_addresses[0].email_address,
        firstName:first_name,
        lastName:last_name
      };
      const newUser = await createStudent(user);
      if(newUser){
        await clerkClient.users.updateUserMetadata(id, {
          publicMetadata: {
            userId: newUser.data._id,
            paymentStatus: newUser.data.payment.status
          },
        });
      }
      return NextResponse.json({ message: "OK", user: newUser });
    } 
    else if(eventType === "user.updated") {
      const { id, email_addresses, first_name, last_name } = evt.data;
      const user = {
        email: email_addresses[0].email_address,
        firstName:first_name,
        lastName:last_name
      };
      const updateDetailsForDb = {
        id:id,
        updateDetails: user
      }
      const updatedUser = await updateStudent(updateDetailsForDb);
      return NextResponse.json({ message: "OK", user: updatedUser });
    } 
    else if (eventType === "user.deleted") {
      const { id } = evt.data;
      await deleteStudent(id);
      return new NextResponse(JSON.stringify({ message: "User deleted successfully" }), { status: 200 });
    } else {
      console.log(`Received unsupported event type: ${eventType}`);
      return new NextResponse(JSON.stringify({ warning: "Event type not supported" }), { status: 200 });
    }
  }

type EventType = "user.created" | "user.updated" | "user.deleted" | "*";

type Event = {
  data: Record<string, any>;
  object: "event";
  type: EventType;
};

export const GET = handler;
export const POST = handler;
export const PUT = handler;