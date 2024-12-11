import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema({
  id: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  distance: { type: String },
  dateRange: { type: String },
  price: { type: Number, required: true },
  rating: { type: Number },
  isFavorite: { type: Boolean, default: false },
  isSoldOut: { type: Boolean, default: false },
  images: { type: [String], default: [] },
  description: { type: String, required: true },
});

export default mongoose.models.Listing || mongoose.model("Listing", ListingSchema);
