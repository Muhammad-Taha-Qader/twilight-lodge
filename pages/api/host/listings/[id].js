import dbConnect from "../../../../lib/db";
import Listing from "../../../../models/Listing";
import { authMiddleware } from "../../../../lib/authMiddleware";

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === "DELETE") {
    const { id } = req.query;
    const { userId } = req.user;

    try {
      const listing = await Listing.findOneAndDelete({ id, userId: userId });

      if (!listing) {
        return res.status(404).json({ message: "Listing not found or unauthorized" });
      }

      res.status(200).json({ message: "Listing deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete listing", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default authMiddleware(handler, ["host"]);
