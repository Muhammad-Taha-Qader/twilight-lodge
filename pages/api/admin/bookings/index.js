// // GET /api/admin/bookings
// // Fetch all bookings with user and listing details.

// import dbConnect from "../../../lib/db";
// import Booking from "../../../models/Booking";
// // import Listing from "../../../models/Listing";
// // import User from "../../../models/User";
// import { authMiddleware } from "../../../lib/authMiddleware";

// const handler = async (req, res) => {
//   await dbConnect();

//   if (req.method === "GET") {
//     try {
//       const bookings = await Booking.find({})
//         .populate("listingId", "title location price images")
//         .populate("userId", "username email");

//       res.status(200).json(bookings);
//     } catch (error) {
//       res.status(500).json({ message: "Failed to fetch bookings", error });
//     }
//   } else {
//     res.status(405).json({ message: "Method Not Allowed" });
//   }
// };

// export default authMiddleware(handler, ["admin"]);


import dbConnect from "../../../../lib/db";
import Booking from "../../../../models/Booking";
import User from "../../../../models/User";
import Listing from "../../../../models/Listing";
import { authMiddleware } from "../../../../lib/authMiddleware";

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === "GET") {
    try {
      // Fetch all bookings
      const bookings = await Booking.find({});

      // Populate each booking with actual user and listing data
      const populatedBookings = await Promise.all(
        bookings.map(async (booking) => {
          const user = await User.findById(booking.userId).select("username email role");
          const listing = await Listing.findById(booking.listingId).select(
            "title location price"
          );

          return {
            ...booking.toObject(),
            user: user || null, // Attach user details or null if not found
            listing: listing || null, // Attach listing details or null if not found
          };
        })
      );

      res.status(200).json(populatedBookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ message: "Failed to fetch bookings", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default authMiddleware(handler, ["admin"]);
