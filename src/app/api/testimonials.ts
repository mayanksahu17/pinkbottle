import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

// MongoDB URI (you can keep this in an environment variable for security reasons)
const uri = process.env.MONGO_URI || 'mongodb+srv://mayank0real0world:PbI4kPBE9s5Z7IBA@hired.ecupz.mongodb.net/';

// Centralized error handling and connection management
export async function GET() {
  if (!uri) {
    return NextResponse.json(
      { message: 'Database connection URI is not configured' }, 
      { status: 500 }
    );
  }

  let client: MongoClient;

  try {
    // Create a new client for each request to avoid connection issues
    client = new MongoClient(uri);
    await client.connect();

    const database = client.db('hiredeasy');
    const collection = database.collection('testimonial');

    // Fetch all testimonials, potentially add sorting or limit
    const testimonials = await collection.find().toArray();

    return NextResponse.json(testimonials, { status: 200 });

  } catch (error) {
    console.error('Testimonials Fetch Error:', error);
    return NextResponse.json(
      { message: 'Failed to retrieve testimonials', error: error instanceof Error ? error.message : 'Unknown error' }, 
      { status: 500 }
    );
  } finally {
    // Ensure client connection is closed
    if (client) await client.close();
  }
}