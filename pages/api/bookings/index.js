import dbConnect from "../../../lib/db";
import Booking from "../../../models/Booking";
import Listing from "../../../models/Listing";
import { authMiddleware } from "../../../lib/authMiddleware";
import { io } from "socket.io-client";

// const SOCKET_SERVER_URL = "https://your-socket-server.com"; 
const SOCKET_SERVER_URL = "http://localhost:4000"; 

const socket = io(SOCKET_SERVER_URL);

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === "POST") {
    const { listingId, userId, startDate, endDate } = req.body;

    if (!listingId || !userId || !startDate || !endDate) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    try {
      //Socket.IO Find the listing to get the host's userId
      const listing = await Listing.findById(listingId);
      if (!listing) {
        return res.status(404).json({ message: "Listing not found" });
      }
      const listingUserId = listing.userId; // Host's userId

      const booking = await Booking.create({
        listingId,
        userId,
        startDate,
        endDate,
      });

      //Socket.IO Emit a real-time event to notify the specific host
      socket.emit("new-booking", {
        listingId,
        userId,
        startDate,
        endDate,
        bookingId: booking._id,
        listingUserId, // Pass the host's userId
      });

      res.status(201).json({ message: "Booking created", booking });
    } catch (error) {
      res.status(500).json({ message: "Failed to create booking", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default authMiddleware(handler, ["user", "host", "admin"]);
