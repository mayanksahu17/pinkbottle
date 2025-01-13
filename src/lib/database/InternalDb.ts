import mongoose from 'mongoose';

const INTERNAL_DB = process.env.INTERNAL_DB;

let cached = (global as any).mongoose || { conn: null, promise: null };
export const dbConnect = async () => {
  if (cached.conn) return cached.conn;
  console.log('URI', INTERNAL_DB);
  if (!INTERNAL_DB) throw new Error('INTERNAL_DB is missing');
  cached.promise =
    cached.promise ||
    (await mongoose.connect(INTERNAL_DB, {
      dbName: 'jobify',
      bufferCommands: true,
    }));
  console.log('DB Connected');

  cached.conn = await cached.promise;
  return cached.conn;
};
