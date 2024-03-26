// pages/api/applications/[userId].ts
import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

// const uri = 'mongodb://localhost:27017';
// const dbName = 'test';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Success', userId: req.query.userId });
  // console.log("Request received for userId:", req.query.userId);
  // const client = new MongoClient(uri);
  // try {
  //   console.log("Connecting to MongoDB...");
  //   await client.connect();
  //   console.log("Successfully connected to MongoDB.");

  //   const db = client.db(dbName);
  //   const { userId } = req.query;

  //   console.log(`Fetching data for userId: ${userId}`);
  //   const applications = await db.collection('applications').find({ userId: userId }).toArray();
  //   console.log("Applications found:", applications);

  //   if (applications.length === 0) {
  //     return res.status(404).json({ message: 'No applications found for the provided userId.' });
  //   }

  //   res.status(200).json(applications);
  // } catch (error) {
  //   console.error('Error while fetching data:', error);
  //   res.status(500).json({ message: 'Failed to connect to MongoDB.' });
  // } finally {
  //   await client.close();
  // }
}
