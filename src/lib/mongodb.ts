import mongoose from "mongoose";

interface MongooseCache {
  connection: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

const globalWithMongoose = global as typeof globalThis & {
  mongoose?: MongooseCache;
};

const cached = globalWithMongoose.mongoose ?? {
  connection: null,
  promise: null,
};

globalWithMongoose.mongoose = cached;

export async function connectToDatabase() {
  if (cached.connection) return cached.connection;

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not configured.");

  cached.promise ??= mongoose.connect(uri, { bufferCommands: false });
  cached.connection = await cached.promise;
  return cached.connection;
}
