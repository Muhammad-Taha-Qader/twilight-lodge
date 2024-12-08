// // #GET /api/listings
// import listings from "../../../data/listings.json";

// export default function handler(req, res) {
//   if (req.method === "GET") {
//     res.status(200).json(listings);
//   } else {
//     res.status(405).json({ message: "Method Not Allowed" });
//   }
// }

import dbConnect from "../../../lib/db";
import Listing from "../../../models/Listing";

export default async function handler(req, res) {
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
}
