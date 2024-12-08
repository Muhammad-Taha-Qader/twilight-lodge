import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

console.log("MongoDB URI:", MONGODB_URI); // Debugging line

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable in .env.local");
}

/** Cached connection */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }; // Initialize if not defined
}

async function dbConnect() {
  // Check if there's an existing connection to reuse
  if (cached.conn) {
    console.log("Reusing existing MongoDB connection.");
    return cached.conn;
  }

  // If no cached connection, initiate a new one
  if (!cached.promise) {
    console.log("Connecting to MongoDB...");

    cached.promise = mongoose
      .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((mongooseInstance) => {
        console.log("MongoDB connected successfully.");
        return mongooseInstance;
      })
      .catch((err) => {
        console.error("MongoDB connection error:", err.message);
        throw new Error("Failed to connect to MongoDB.");
      });
  }

  // Wait for the connection to be established and set the cached connection
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
