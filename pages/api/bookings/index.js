// //Works fine but don't save the new post req in json
// // export default function handler(req, res) {
// //   if (req.method === "POST") {
// //     const { listingId, userId, startDate, endDate } = req.body;
  
// //     // Mock response - you can extend this logic to interact with a database
// //     const booking = {
// //       id: Math.random().toString(36).substr(2, 9),
// //       listingId,
// //       userId,
// //       startDate,
// //       endDate,
// //       status: "confirmed"
// //     };
  
// //     res.status(201).json({ message: "Booking created", booking });
// //   } else {
// //     res.status(405).json({ message: "Method Not Allowed" });
// //   }
// // }
  

// import fs from "fs";
// import path from "path";

// const BOOKINGS_FILE = path.join(process.cwd(), "data", "bookings.json");

// export default function handler(req, res) {
//   if (req.method === "POST") {
//     const { listingId, userId, startDate, endDate } = req.body;

//     // Validate request body
//     if (!listingId || !userId || !startDate || !endDate) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     // Create a new booking object
//     const booking = {
//       id: Math.random().toString(36).substr(2, 9),
//       listingId,
//       userId,
//       startDate,
//       endDate,
//       status: "confirmed",
//     };

//     // Check if the JSON file exists
//     if (!fs.existsSync(BOOKINGS_FILE)) {
//       // If the file doesn't exist, create it with an initial array containing the booking
//       fs.writeFileSync(BOOKINGS_FILE, JSON.stringify([booking], null, 2));
//     } else {
//       // If the file exists, read its contents
//       const fileContents = fs.readFileSync(BOOKINGS_FILE, "utf-8");
//       let bookings = [];

//       try {
//         bookings = JSON.parse(fileContents); // Parse existing bookings
//       } catch (error) {
//         console.error("Error parsing bookings file:", error);
//         return res.status(500).json({ message: "Internal server error" });
//       }

//       // Add the new booking to the array
//       bookings.push(booking);

//       // Write the updated array back to the file
//       try {
//         fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
//       } catch (error) {
//         console.error("Error writing to bookings file:", error);
//         return res.status(500).json({ message: "Internal server error" });
//       }
//     }

//     // Respond with the created booking
//     res.status(201).json({ message: "Booking created", booking });
//   } else {
//     res.status(405).json({ message: "Method Not Allowed" });
//   }
// }


import dbConnect from "../../../lib/db";
import Booking from "../../../models/Booking";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { listingId, userId, startDate, endDate } = req.body;

    if (!listingId || !userId || !startDate || !endDate) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    try {
      const booking = await Booking.create({
        listingId,
        userId,
        startDate,
        endDate,
      });
      res.status(201).json({ message: "Booking created", booking });
    } catch (error) {
      res.status(500).json({ message: "Failed to create booking", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
