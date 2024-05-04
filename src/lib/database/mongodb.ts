import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || {conn:null, promise:null};
export const dbConnect = async () => {
    if(cached.conn) return cached.conn;
    console.log("URI",MONGODB_URI);
    if(!MONGODB_URI) throw new Error("MONGODB_URI is missing");
    cached.promise = cached.promise || await mongoose.connect(MONGODB_URI, {
        dbName:'jobify',
        bufferCommands: true
    })
    console.log("DB Connected");
    
    cached.conn = await cached.promise;
    return cached.conn;
}