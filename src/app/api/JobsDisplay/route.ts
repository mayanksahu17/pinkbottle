// app/api/JobsDisplay/route.ts
import { MongoClient } from 'mongodb';
import { withAuth } from "@clerk/nextjs/api";
import type { NextApiRequest, NextApiResponse } from 'next';

const uri = 'mongodb://localhost:27017';
const dbName = 'test';

// Define the GET method explicitly as a named export
export const GET = withAuth(async (req, res) => {
  const userId = req.auth.userId; // Accessing userId from the session

  if (!userId) {
    res.status(401).json({ message: 'Unauthorized: No active session found' });
    return;
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);

  try {
    const applications = await db.collection('job').find({ userId }).toArray();
    if (applications.length === 0) {
      res.status(404).json({ message: 'No applications found for the provided userId.' });
    } else {
      res.status(200).json(applications);
    }
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    client.close();
  }
});
