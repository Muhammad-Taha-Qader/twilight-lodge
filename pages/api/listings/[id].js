// // #GET /api/listings/:id
// import listings from "../../../data/listings.json";

// export default function handler(req, res) {
//   const { id } = req.query;

//   const listing = listings.find((item) => item.id === id);

//   if (listing) {
//     res.status(200).json(listing);
//   } else {
//     res.status(404).json({ message: "Listing not found" });
//   }
// }



import dbConnect from "../../../lib/db";
import Listing from "../../../models/Listing";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  if (req.method === "GET") {
    try {
      const listing = await Listing.findById(id);
      if (!listing) {
        return res.status(404).json({ message: "Listing not found" });
      }
      res.status(200).json(listing);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch listing", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
