"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Listing } from "@/types/listing";
import { useRouter } from "next/navigation";
import Carousel from "@/components/Card/Carousel";

export default function BookPage() {
  const params = useParams() as { id: string };
  const { id } = params;
  const router = useRouter();

  const [listing, setListing] = useState<Listing | null>(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [formError, setFormError] = useState("");
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [bookingConfirmation, setBookingConfirmation] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/listings/${id}`)
        .then((res) => res.json())
        .then((data) => setListing(data))
        .catch((error) => console.error("Error fetching listing:", error));
    }
  }, [id]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!startDate || !endDate) {
      setFormError("Please select both check-in and check-out dates.");
      return;
    }
    if (new Date(startDate) >= new Date(endDate)) {
      setFormError("Check-out date must be later than check-in date.");
      return;
    }

    setFormError(""); // Clear previous errors

    // Calculate total price
    const days = Math.ceil(
      (new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24)
    );
    const calculatedPrice = days * (listing?.price || 0);
    setTotalPrice(calculatedPrice);

    // Send booking request to API
    const bookingData = {
      listingId: id,
      userId: id, // Replace with real user ID when available
      startDate,
      endDate,
    };

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });
      const result = await response.json();
      setBookingConfirmation(result.message);
    } catch (error) {
      console.error("Error submitting booking:", error);
      setFormError("Failed to create booking. Please try again.");
    }
  };

  if (!listing) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{listing.title}</h1>
      <Carousel images={listing.images} />
      <p className="text-my-cocoa-200">{listing.location}</p>
      <p className="text-xl font-semibold text-green-600 mb-4">${listing.price} per night</p>
      <p className="text-my-cocoa-100">{listing.description}</p>

      <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm mb-1 text-my-cocoa-400">Check-in</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border-2 bg-zinc-900 border-my-cocoa-950 p-2 rounded-xl text-my-cocoa-50"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-my-cocoa-400">Check-out</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full border-2 bg-zinc-900 border-my-cocoa-950 p-2 rounded-xl text-my-cocoa-50"
          />
        </div>

        {formError && <p className="text-red-600 text-sm">{formError}</p>}

        <button
          type="submit"
          className="bg-my-cocoa-500 text-my-cocoa-50 px-7 py-4 rounded-lg mt-4 w-full"
        >
          Confirm Booking
        </button>
      </form>

      {totalPrice !== null && (
        <div className="mt-6 border-2 bg-zinc-900 border-my-cocoa-950 rounded-xl p-4 shadow">
          <h2 className="text-lg font-semibold">Booking Summary</h2>
          <p>Check-in: {startDate}</p>
          <p>Check-out: {endDate}</p>
          <p>Total Nights: {Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24))}</p>
          <p>Total Price: ${totalPrice}</p>
        </div>
      )}

      {bookingConfirmation && (
        <p className="text-green-600 mt-4">{bookingConfirmation}</p>
      )}

      <button
        type="button"
        onClick={() => router.push(`/listings/${id}`)}
        className="bg-my-cocoa-500 text-my-cocoa-50 px-7 py-4 rounded-lg mt-4"
      >
        Back to Listing
      </button>
    </div>
  );
}
