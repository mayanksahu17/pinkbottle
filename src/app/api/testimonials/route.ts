import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { LRUCache } from "lru-cache";

const uri = process.env.MONGODB_URI;

if (!uri) throw new Error("MongoDB URI not configured");

// Initialize MongoDB client
const client = new MongoClient(uri);

// Set up LRU Cache
const options = {
  max: 100, // Maximum items in cache
  ttl: 60 * 1000, // Cache time-to-live: 1 minute (in milliseconds)
};

const cache = new LRUCache<string, any>(options);

export async function GET(req: NextRequest) {
  try {
    // Check if data exists in the cache
    if (cache.has("testimonials")) {
      console.log("Serving from cache");
      return NextResponse.json(cache.get("testimonials"));
    }

    console.log("Fetching from MongoDB");
    await client.connect();
    const database = client.db("hiredeasy");
    const collection = database.collection("testimonials");

    // Query database
    const testimonials = await collection.find({}).project({
      _id: 1,
      client_name: 1,
      position_at_company_and_location: 1,
      company_profile: 1,
      linkedin_url: 1,
      profile_image_url: 1,
      description: 1,
    }).toArray();

    // Store the result in the cache
    cache.set("testimonials", testimonials);

    // Return data
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { error: "Failed to retrieve testimonials" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
