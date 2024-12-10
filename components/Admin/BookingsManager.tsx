"use client";

import { useState, useEffect } from "react";

interface Booking {
  _id: string;
  listingId: string;
  userId: string;
  startDate: string;
  endDate: string;
  status: string;
  user?: {
    username: string;
    email: string;
    role: string;
  };
  listing?: {
    title: string;
    location: string;
    price: number;
  };
}

const BookingsManager = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/admin/bookings", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => {
        console.error("Error fetching bookings:", err);
        setError("Failed to load bookings.");
      });
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-my-cocoa-100 mb-4">Bookings Management</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="overflow-x-auto bg-zinc-900 border border-my-cocoa-400 rounded-lg shadow-md">
        <table className="min-w-full text-my-cocoa-50">
          <thead className="bg-my-cocoa-600 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Booking ID</th>
              <th className="py-2 px-4 text-left">User</th>
              <th className="py-2 px-4 text-left">Listing</th>
              <th className="py-2 px-4 text-left">Start Date</th>
              <th className="py-2 px-4 text-left">End Date</th>
              <th className="py-2 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking._id} className="border-b border-my-cocoa-400">
                  <td className="py-2 px-4">{booking._id}</td>
                  <td className="py-2 px-4">
                    {booking.user?.username || "Unknown User"}<br />
                    <span className="text-my-cocoa-200 text-sm">{booking.user?.email || ""}</span>
                  </td>
                  <td className="py-2 px-4">
                    {booking.listing?.title || "Unknown Listing"}<br />
                    <span className="text-my-cocoa-200 text-sm">{booking.listing?.location || ""}</span>
                  </td>
                  <td className="py-2 px-4">{new Date(booking.startDate).toLocaleDateString()}</td>
                  <td className="py-2 px-4">{new Date(booking.endDate).toLocaleDateString()}</td>
                  <td className="py-2 px-4">{booking.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-4 px-4 text-center text-my-cocoa-200">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingsManager;
