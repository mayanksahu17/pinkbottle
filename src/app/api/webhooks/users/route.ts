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
    if (eventType === "user.created" || eventType === "user.updated") {
      const { id, ...attributes } = evt.data;
      await prisma.user.upsert({
        where: { externalId: id as string },
        create: {
          externalId: id as string,
          attributes,
        },
        update: { attributes },
      });
      return new NextResponse(JSON.stringify({ message: "User processed successfully" }), { status: 200 });
    } else if (eventType === "user.deleted") {
      const { id } = evt.data;
      await prisma.user.delete({
        where: { externalId: id as string },
      });
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