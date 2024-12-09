import dbConnect from "../../../lib/db";
import Booking from "../../../models/Booking";
import { authMiddleware } from "../../../lib/authMiddleware";

async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const userId = req.user.userId; // Extract userId from authMiddleware
      //$$$ In the authMiddleware, the req.user is populated with the decoded JWT payload, allowing subsequent API route handlers to access user-specific data, such as the userId.
      const bookings = await Booking.find({ userId });
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch bookings", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

export default authMiddleware(handler);
