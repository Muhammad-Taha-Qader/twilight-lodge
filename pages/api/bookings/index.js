export default function handler(req, res) {
  if (req.method === "POST") {
    const { listingId, userId, startDate, endDate } = req.body;
  
    // Mock response - you can extend this logic to interact with a database
    const booking = {
      id: Math.random().toString(36).substr(2, 9),
      listingId,
      userId,
      startDate,
      endDate,
      status: "confirmed"
    };
  
    res.status(201).json({ message: "Booking created", booking });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
  