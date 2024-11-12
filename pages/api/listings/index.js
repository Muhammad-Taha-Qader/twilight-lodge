// #GET /api/listings
import listings from "../../../data/listings.json";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(listings);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
