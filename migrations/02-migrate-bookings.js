import dbConnect from "../lib/db";  // Connect to the MongoDB database
import Booking from "../models/Booking";  // Booking model for MongoDB
import bookings from "../data/bookings.json";  // Your booking data in JSON format
import Listing from "../models/Listing";  // The Listing model for looking up _id

(async function migrateBookings() {
  await dbConnect();  // Connect to MongoDB

  // Fetch all listings from the database to map old `listingId` to new MongoDB `_id`
  const listings = await Listing.find();

  // Update the `listingId` in bookings to the new MongoDB _id
  const updatedBookings = bookings.map((booking) => {
    const listing = listings.find((l) => l.id === booking.listingId); // Find the correct listing
    if (listing) {
      booking.listingId = listing._id;  // Update with the MongoDB _id
    }
    return booking;
  });

  // Insert updated bookings into MongoDB
  await Booking.insertMany(updatedBookings);

  console.log("Bookings migrated successfully!");
})();
