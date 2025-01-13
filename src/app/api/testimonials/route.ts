import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { LRUCache } from "lru-cache";

// MongoDB Connection URI
const uri = process.env.INTERNAL_DB;

if (!uri) throw new Error("MongoDB URI not configured");

const client = new MongoClient(uri);

// Set up LRU Cache
const options = {
  max: 100, // Maximum items in the cache
  ttl:24* 60 * 60 * 1000, // Cache time-to-live: 1 hour (in milliseconds)
};

const cache = new LRUCache<string, any>(options);

async function fetchTestimonialsFromDatabase() {
  console.log("Fetching from MongoDB");
  await client.connect();
  const database = client.db("hiredeasy_testimonials");
  const collection = database.collection("testimonials");

  // Query the database
  const testimonials = await collection
    .find({})
    .project({
      _id: 1,
      client_name: 1,
      position_at_company_and_location: 1,
      company_profile: 1,
      linkedin_url: 1,
      profile_image_url: 1,
      description: 1,
    })
    .toArray();

  return testimonials;
}

export async function GET(req: NextRequest) {
  try {
    // Check if the testimonials data is in cache
    if (cache.has("testimonials")) {
      console.log("Serving from cache");
      return NextResponse.json(cache.get("testimonials"));
    }

    // If not in cache, fetch from database
    const testimonials = await fetchTestimonialsFromDatabase();

    // Store the fetched data in the cache
    cache.set("testimonials", testimonials);

    // Return the fetched data
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { error: "Failed to retrieve testimonials" },
      { status: 500 }
    );
  } finally {
    // Ensure the client connection is closed
    await client.close();
  }
}
