import dbConnect from "../../../../lib/db";
import Booking from "../../../../models/Booking";
import Listing from "../../../../models/Listing";
import { authMiddleware } from "../../../../lib/authMiddleware";

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === "GET") {
    const { userId } = req.user;

    try {
      const hostListings = await Listing.find({ hostId: userId }).select("_id");
      const hostListingIds = hostListings.map((listing) => listing._id.toString());

      const bookings = await Booking.find({ listingId: { $in: hostListingIds } });

      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch bookings", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default authMiddleware(handler, ["host"]);
