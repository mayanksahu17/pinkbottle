import {
  createStudent,
  deleteStudent,
  updateStudent,
} from '@/lib/actions/users/user.actions';
import { clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { Webhook } from 'svix';
import { dbConnect } from '@/lib/database/mongodb';
import User from '@/lib/database/models/User/User';
import Lead from '@/lib/database/models/Leads/leads'; // Assuming you have a Lead model

const webhookSecret = process.env.WEBHOOK_SECRET || '';

async function handler(request: Request) {
  console.log('Webhooks users route reached', request.method, request.url);

  try {
    await dbConnect();
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Database not connected' }),
      { status: 500 }
    );
  }

  const bodyText = await request.text();
  console.log('Raw request body:', bodyText);

  const svix_id = request.headers.get('svix-id') ?? '';
  const svix_timestamp = request.headers.get('svix-timestamp') ?? '';
  const svix_signature = request.headers.get('svix-signature') ?? '';
  console.log('Webhook headers:', { svix_id, svix_timestamp, svix_signature });

  const wh = new Webhook(webhookSecret);
  let evt: Event;

  try {
    const verifiedPayload = wh.verify(bodyText, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    });
    console.log('Type of verifiedPayload:', typeof verifiedPayload);
    console.log('Verified payload:', verifiedPayload);

    if (typeof verifiedPayload === 'string') {
      evt = JSON.parse(verifiedPayload) as Event;
    } else {
      evt = verifiedPayload as Event;
    }
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new NextResponse(
      JSON.stringify({ error: 'Webhook verification failed' }),
      { status: 400 }
    );
  }

  const eventType: EventType = evt.type;
  if (eventType === 'user.created') {
    console.log(eventType);
    const { id, email_addresses, first_name, last_name } = evt.data;
    console.log('Inside user created');

    const user = {
      clerkId: id,
      email: email_addresses[0].email_address,
      firstName: first_name,
      lastName: last_name,
    };

    console.log(user);

    try {
      const existingUser = await User.findOne({ email: user.email });

      if (existingUser) {
        console.log('User already exists in Users collection.');
        return new NextResponse(
          JSON.stringify({
            message: 'User already exists',
            user: existingUser,
          }),
          { status: 200 }
        );
      }

      const newUser = await User.create(user);

      if (!newUser) {
        console.error(
          'Failed to create user in MongoDB, newUser is undefined.'
        );
        return new NextResponse(
          JSON.stringify({ error: 'Failed to create user in MongoDB' }),
          { status: 500 }
        );
      }

      // Create a new lead entry in the Leads collection
      const newLead = {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        clerkId: newUser._id,
      };

      try {
        const createdLead = await Lead.create(newLead);

        if (!createdLead) {
          console.error(
            'Failed to create lead in MongoDB, createdLead is undefined.'
          );
          return new NextResponse(
            JSON.stringify({ error: 'Failed to create lead in MongoDB' }),
            { status: 500 }
          );
        }
      } catch (error: unknown) {
        if (
          error instanceof Error &&
          'code' in error &&
          (error as any).code === 11000
        ) {
          // Duplicate key error
          console.warn(
            'Duplicate lead entry, skipping creation in Leads collection.'
          );
        } else {
          console.error('Error creating lead in MongoDB:', error);
          return new NextResponse(
            JSON.stringify({ error: 'Failed to create lead in MongoDB' }),
            { status: 500 }
          );
        }
      }

      await clerkClient.users.updateUserMetadata(id, {
        publicMetadata: {
          userId: newUser._id,
          paymentStatus: 'unknown',
        },
      });

      return NextResponse.json({
        message: 'User and lead created successfully',
        user: newUser,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Error creating user:', err.message);
      } else {
        console.error('Unknown error creating user:', err);
      }
      return new NextResponse(
        JSON.stringify({
          error: 'Something went wrong creating the user in MongoDB',
        }),
        { status: 500 }
      );
    }
  } else if (eventType === 'user.updated') {
    const { id, email_addresses, first_name, last_name } = evt.data;
    const user = {
      email: email_addresses[0].email_address,
      firstName: first_name,
      lastName: last_name,
    };
    const updateDetailsForDb = {
      id: id,
      updateDetails: user,
    };
    const updatedUser = await updateStudent(updateDetailsForDb);
    return NextResponse.json({ message: 'OK', user: updatedUser });
  } else if (eventType === 'user.deleted') {
    const { id } = evt.data;
    await deleteStudent(id);
    return new NextResponse(
      JSON.stringify({ message: 'User deleted successfully' }),
      { status: 200 }
    );
  } else {
    console.log(`Received unsupported event type: ${eventType}`);
    return new NextResponse(
      JSON.stringify({ warning: 'Event type not supported' }),
      { status: 200 }
    );
  }
}

type EventType = 'user.created' | 'user.updated' | 'user.deleted' | '*';

type Event = {
  data: Record<string, any>;
  object: 'event';
  type: EventType;
};

export const GET = handler;
export const POST = handler;
export const PUT = handler;
