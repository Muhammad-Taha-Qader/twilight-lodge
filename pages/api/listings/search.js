//GET /api/listings/search?query=<location>
import listings from "../../../data/listings.json";

export default function handler(req, res) {
  const { query } = req.query;

  const filteredListings = listings.filter((item) =>
    item.location.toLowerCase().includes(query.toLowerCase())
  );

  res.status(200).json(filteredListings);
}
