// import dbConnect from "../lib/db.js";
// import Listing from "../models/Listing.js";
// import listings from "../data/listings.json" assert { type: "json" };

// (async function migrateListings() {
//   await dbConnect();

//   // Insert listings and MongoDB will automatically generate '_id'
//   await Listing.insertMany(listings);

//   console.log("Listings migrated successfully!");
// })();








// import dotenv from "dotenv";
// dotenv.config({ path: "../.env.local" });  // Load from .env.local explicitly

// console.log("MONGODB_URI:", process.env.MONGODB_URI);  // Check if the URI is loaded

// import dbConnect from "../lib/db.js";
// import Listing from "../models/Listing.js";
// import listings from "../data/listings.json" assert { type: "json" };

// (async function migrateListings() {
//   // Check if MONGODB_URI is defined
//   if (!process.env.MONGODB_URI) {
//     throw new Error("Please define the MONGODB_URI environment variable in .env.local");
//   }

//   await dbConnect();

//   // Insert listings and MongoDB will automatically generate '_id'
//   await Listing.insertMany(listings);

//   console.log("Listings migrated successfully!");
// })();





import dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });  // Load the environment variables


import dbConnect from "../lib/db.js";
import Listing from "../models/Listing.js";
import listings from "../data/listings.json" assert { type: "json" };

// Function to connect to the database before doing anything else
async function initializeDbConnection() {
  console.log("Connecting to MongoDB...");
  try {
    await dbConnect();
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);  // Exit the process if database connection fails
  }
}

(async function migrateListings() {
  await initializeDbConnection();  // Ensure the DB connection is established first

  // Insert listings and MongoDB will automatically generate '_id'
  try {
    await Listing.insertMany(listings);
    console.log("Listings migrated successfully!");
  } catch (error) {
    console.error("Error migrating listings:", error);
  }
})();
