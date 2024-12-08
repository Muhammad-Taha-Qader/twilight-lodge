import mongoose from "mongoose";
import Listing from "../models/Listing.js";  // Adjust path if needed
import Booking from "../models/Booking.js";  // Adjust path if needed

// const MONGODB_URI = process.env.MONGODB_URI;
let MONGODB_URI = "mongodb+srv://mtahaqader000:QktJpqbijm2w4roB@cluster0.eceqe.mongodb.net/";
console.log("-----------> " + MONGODB_URI);
const listingsData = [
  {
    title: "Beachfront Bungalow",
    location: "Miami, Florida, USA",
    distance: "1,200 kilometers",
    dateRange: "Dec 5 – Dec 10",
    price: 200,
    rating: 4.88,
    isFavorite: false,
    isSoldOut: true,
    images: [
      "/Card/c1/c1.webp",
      "/Card/c1/c2.webp",
      "/Card/c1/c3.webp",
      "/Card/c1/c4.webp",
      "/Card/c1/c5.webp"
    ],
    description: "Enjoy the ocean view from this cozy beachfront bungalow, perfect for a relaxing getaway.",
  },
  {
    title: "Mountain Retreat",
    location: "Aspen, Colorado, USA",
    distance: "300 kilometers",
    dateRange: "Dec 15 – Dec 22",
    price: 350,
    rating: 4.95,
    isFavorite: true,
    isSoldOut: false,
    images: [
      "/Card/c2/c1.webp",
      "/Card/c2/c2.webp",
      "/Card/c2/c3.webp"
    ],
    description: "A luxurious mountain cabin, offering scenic views and cozy ambiance for a winter retreat.",
  },
];

const bookingsData = [
  {
    listingId: "64b614f0a5c1f03960bc9eab",  // Replace with actual listing ObjectId from your database
    userId: "mock-user-123",
    startDate: new Date("2024-11-19"),
    endDate: new Date("2025-03-06"),
    status: "confirmed",
  },
  {
    listingId: "64b614f0a5c1f03960bc9eac",  // Replace with actual listing ObjectId from your database
    userId: "mock-user-456",
    startDate: new Date("2024-12-10"),
    endDate: new Date("2024-12-17"),
    status: "pending",
  },
];

async function populateData() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Insert Listings
    const listings = await Listing.insertMany(listingsData);
    console.log(`${listings.length} listings inserted.`);

    // Insert Bookings (ensure the `listingId` references valid ObjectIds)
    const bookings = await Booking.insertMany(bookingsData);
    console.log(`${bookings.length} bookings inserted.`);

    // Close the connection
    mongoose.connection.close();
    console.log("Data inserted successfully!");
  } catch (error) {
    console.error("Error inserting data:", error);
    mongoose.connection.close();
  }
}

populateData();
