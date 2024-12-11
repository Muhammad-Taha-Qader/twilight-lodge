import dbConnect from "../../../../lib/db";
import Listing from "../../../../models/Listing";
import { authMiddleware } from "../../../../lib/authMiddleware";

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === "POST") {
    const { title, location, distance, dateRange, price, rating, isFavorite, isSoldOut, images, description } = req.body;
    const { userId } = req.user;

    if (!title || !location || !price || !description) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    try {
      const listing = await Listing.create({
        id: "mock", // Temporarily assign mock id
        hostId: userId,
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

      listing.id = listing._id.toString(); // Assign MongoDB-generated `_id` to `id`
      await listing.save();

      res.status(201).json({ message: "Listing created successfully", listing });
    } catch (error) {
      res.status(500).json({ message: "Failed to create listing", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default authMiddleware(handler, ["host"]);
