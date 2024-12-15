import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

const uri = process.env.MONGODB_URI || 'mongodb+srv://mayank0real0world:PbI4kPBE9s5Z7IBA@hired.ecupz.mongodb.net/hr_database?retryWrites=true&w=majority';

export async function GET(request: NextRequest) {
  if (!uri) {
    return NextResponse.json({ error: 'MongoDB URI not configured' }, { status: 500 });
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('hiredeasy');
    const collection = database.collection('testimonials');

    console.log("Collection ..", collection); 
    

    const testimonials = await collection.find().toArray();

    console.log("Testimonials fetched successfully", testimonials); 
    

    return NextResponse.json(testimonials, { status: 200 });
  } catch (error) {
    console.error('Testimonials Fetch Error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve testimonials' }, 
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}