import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import Person from '../../../lib/database/models/testimonial';  

const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  await mongoose.connect(process.env.MONGODB_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === 'GET') {
    try {
      const testimonials = await Person.find();  // Fetch all testimonials from the database
      res.status(200).json(testimonials);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to fetch testimonials' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
