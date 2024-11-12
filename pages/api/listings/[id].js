// #GET /api/listings/:id
import listings from "../../../data/listings.json";

export default function handler(req, res) {
  const { id } = req.query;

  const listing = listings.find((item) => item.id === id);

  if (listing) {
    res.status(200).json(listing);
  } else {
    res.status(404).json({ message: "Listing not found" });
  }
}
