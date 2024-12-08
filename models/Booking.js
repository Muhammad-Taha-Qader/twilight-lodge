import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
//   id: { type: String, required: true },
//   listingId: { type: mongoose.Schema.Types.ObjectId, ref: "Listing", required: true }, // Reference to Listing model
  listingId: { type: String, required: true }, 
  userId: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: { type: String, default: "confirmed" },
});

export default mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
