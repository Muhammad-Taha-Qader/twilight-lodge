// //GET /api/listings/search?query=<location>
// import listings from "../../../data/listings.json";

// export default function handler(req, res) {
//   const { query } = req.query;

//   const filteredListings = listings.filter((item) =>
//     item.location.toLowerCase().includes(query.toLowerCase())
//   );

//   res.status(200).json(filteredListings);
// }


import dbConnect from "../../../lib/db"; // Ensure you import the dbConnect function
import Listing from "../../../models/Listing";  // The Listing model to interact with MongoDB

export default async function handler(req, res) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: "Query parameter is required" });
  }

  try {
    // Connect to the database
    await dbConnect();

    // Use Mongoose to find listings where the location matches the query
    const filteredListings = await Listing.find({
      location: { $regex: query, $options: "i" }, // Case-insensitive search
    });

    if (filteredListings.length === 0) {
      return res.status(404).json({ message: "No listings found matching the query" });
    }

    // Return the filtered listings as JSON
    res.status(200).json(filteredListings);
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
