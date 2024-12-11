// POST /api/admin/listings
// Add a new listing.
// we can't take id from input form bt most our other files are expecting id field instead of "ObjectId(by mongoDb) / _id "
// so we will 1st crete a listing and then update it with the id = _id, so we don't have to change rest of code base
import dbConnect from "../../../../lib/db";
import Listing from "../../../../models/Listing";
import { authMiddleware } from "../../../../lib/authMiddleware";

const handler = async (req, res) => {
  await dbConnect();
  
  if (req.method === "POST") {
    const { title, location, distance, dateRange, price, rating, isFavorite, isSoldOut, images, description } = req.body;
    const { user } = req; // Extracted by authMiddleware
  
    if (!title || !location || !price || !description) {
      return res.status(400).json({ message: "Missing required fields" });
    }
  
    if (!user || !user.userId) {
      return res.status(401).json({ message: "User not authenticated" });
    }
    try {
      // Create the listing document without the 'id' field first
      const listing = await Listing.create({
        id: "mock",
        userId: user.userId, // Link the listing to the current user
        title,
        location,
        distance,
        dateRange,
        price,
        rating,
        isFavorite,
        isSoldOut,
        images,
        description,
      });
  
      // Assign the generated ObjectId value to the 'id' field
      listing.id = listing._id.toString();
  
      // Save the updated document with the 'id' field
      await listing.save();
  
      res.status(201).json({ message: "Listing created successfully", listing });
    } catch (error) {
      console.error("Error creating listing:", error.message);
      res.status(500).json({ message: "Failed to create listing", error });
    }
  } else {
    res.status(405).json({ message: "FROM POST admin - Method Not Allowed" });
  }
};
  
export default authMiddleware(handler, ["admin"]);