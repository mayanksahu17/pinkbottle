import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { IncomingForm } from 'formidable';
import { promises as fs } from 'fs';

// MongoDB URI and Collection Name
const uri = "mongodb://localhost:27017";
const databaseName = "test"; // Set your database name here
const collectionName = "resumes";

// MongoDB connection utility
const connectToDatabase = async () => {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(databaseName);
  const collection = db.collection(collectionName);
  return { client, collection };
};

// POST method handler
export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const form = new IncomingForm();
  form.parse(req, async (err, fields, files: any) => {
    if (err) {
      res.status(500).json({ message: 'File upload error', error: `Error: ${String(err)}` });
      return;
    }

    const { client, collection } = await connectToDatabase();

    try {
      const file = files.file;
      const data = await fs.readFile(file.filepath);
      const resume = {
        name: file.originalFilename,
        type: file.mimetype,
        size: file.size,
        content: data,
      };

      await collection.insertOne(resume);
      await fs.unlink(file.filepath); // Remove the file from the server after upload

      res.status(200).json({ message: 'Resume uploaded successfully' });
    } catch (error) {
      console.error('Database connection or operation error:', error);
      res.status(500).json({ message: 'Database operation failed', error: `Error: ${String(error)}` });
    } finally {
      await client.close();
    }
  });
};
