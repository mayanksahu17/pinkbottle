import mongoose from 'mongoose';

const LINKEDIN_MONGODB_URI = process.env.LINKEDIN_MONGODB_URI;

let linkedinCached = (global as any).linkedinMongoose || { conn: null, promise: null };

export const linkedinDbConnect = async () => {
  if (linkedinCached.conn) return linkedinCached.conn;

  if (!LINKEDIN_MONGODB_URI) throw new Error('LINKEDIN_MONGODB_URI is missing');

  linkedinCached.promise =
    linkedinCached.promise ||
    mongoose.createConnection(LINKEDIN_MONGODB_URI, {
      dbName: 'test', // Use your specific database name here
      bufferCommands: true,
    }).asPromise();

  linkedinCached.conn = await linkedinCached.promise;
  console.log('LinkedIn DB Connected');
  return linkedinCached.conn;
};
