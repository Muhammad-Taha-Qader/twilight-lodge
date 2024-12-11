import dbConnect from "../../../../lib/db";
import Booking from "../../../../models/Booking";
import Listing from "../../../../models/Listing";
import { authMiddleware } from "../../../../lib/authMiddleware";

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === "GET") {
    const { userId } = req.user;

    try {
      // Fetch all listings for the host
      const hostListings = await Listing.find({ userId: userId }).select("_id title location");
      const hostListingIds = hostListings.map((listing) => listing._id.toString());

      // Fetch bookings for these listings
      const bookings = await Booking.find({ listingId: { $in: hostListingIds } }).lean();

      // Attach listing details (title, location) to each booking
      const bookingsWithListingDetails = bookings.map((booking) => {
        const listing = hostListings.find((l) => l._id.toString() === booking.listingId);
        return {
          ...booking,
          listing: listing ? { title: listing.title, location: listing.location } : undefined,
        };
      });

      res.status(200).json(bookingsWithListingDetails);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch bookings", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default authMiddleware(handler, ["host"]);
