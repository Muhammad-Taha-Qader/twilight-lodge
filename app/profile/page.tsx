// "use client";

// import useAuth from "../../lib/useAuth";

// const ProfilePage = () => {
//   const isAuthorized = useAuth(["user", "host", "admin"]); // Allow all authenticated roles

//   if (!isAuthorized) {
//     return <p>Loading...</p>; // Show loading until authentication is verified
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
//       <p>Welcome to your profile page!</p>
//     </div>
//   );
// };

// export default ProfilePage;


"use client";

import { useState, useEffect } from "react";
import useAuth from "../../lib/useAuth";
import Loader from "@/components/Animations/Loader";

interface User {
  username: string;
  email: string;
  role: "user" | "host" | "admin";
}

interface Booking {
  listingId: string;
  userId: string;
  startDate: string;
  endDate: string;
  status: string;
}

const ProfilePage = () => {
  const isAuthorized = useAuth(["user", "host", "admin"]); // Allow all authenticated roles
  const [user, setUser] = useState<User | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuthorized) return;

    const fetchProfileData = async () => {
      try {
        // Fetch user details
        const profileResponse = await fetch("/api/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (!profileResponse.ok) {
          throw new Error("Failed to fetch user details.");
        }
        const profileData = await profileResponse.json();
        setUser(profileData);

        // Fetch user bookings
        const bookingsResponse = await fetch("/api/bookings/get", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (!bookingsResponse.ok) {
          throw new Error("Failed to fetch bookings.");
        }
        const bookingsData = await bookingsResponse.json();
        setBookings(bookingsData);

        setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching data.");
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [isAuthorized]);

  if (!isAuthorized) {
    return <p>Redirecting to login...</p>;
  }

  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-zinc-900 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-my-cocoa-100">Your Profile</h1>

      {/* User Details */}
      {user && (
        <div className="mb-8">
          <p className="text-lg text-my-cocoa-200 mb-2">
            <strong>Username:</strong> {user.username}
          </p>
          <p className="text-lg text-my-cocoa-200 mb-2">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-lg text-my-cocoa-200">
            <strong>Role:</strong> {user.role}
          </p>
        </div>
      )}

      {/* Booking History */}
      <h2 className="text-2xl font-bold mb-4 text-my-cocoa-100">Booking History</h2>
      {bookings.length > 0 ? (
        <div className="space-y-4">
          {bookings.map((booking, index) => (
            <div
              key={index}
              className="border-2 bg-zinc-800 border-my-cocoa-950 rounded-lg p-4 shadow-md"
            >
              <p className="text-my-cocoa-200">
                <strong>Listing ID:</strong> {booking.listingId}
              </p>
              <p className="text-my-cocoa-200">
                <strong>Check-in:</strong> {new Date(booking.startDate).toLocaleDateString()}
              </p>
              <p className="text-my-cocoa-200">
                <strong>Check-out:</strong> {new Date(booking.endDate).toLocaleDateString()}
              </p>
              <p
                className={`text-lg font-semibold ${
                  booking.status === "confirmed" ? "text-green-500" : "text-red-500"
                }`}
              >
                <strong>Status:</strong> {booking.status}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-my-cocoa-200">You have no booking history.</p>
      )}
    </div>
  );
};

export default ProfilePage;
