// GET /api/admin/listings
// Fetch all listings.
import dbConnect from "../../../../lib/db";
import Listing from "../../../../models/Listing";
import { authMiddleware } from "../../../../lib/authMiddleware";

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const listings = await Listing.find({});
      res.status(200).json(listings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch listings", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default authMiddleware(handler, ["admin"]);
