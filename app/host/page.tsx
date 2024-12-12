"use client";

import { useEffect, useState } from "react";
import useAuth from "../../lib/useAuth";
import ListingsManager from "../../components/Host/HostListingsManager";
import BookingsManager from "../../components/Host/HostBookingsManager";
import Loader from "@/components/Animations/Loader";
import { FaHome, FaChevronRight, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import socket from "@/lib/socket"; // Import the Socket.IO client instance

const HostDashboard = () => {
  const router = useRouter();
  const isAuthorized = useAuth(["host"]);
  const [alerts, setAlerts] = useState<string[]>([]); // State to hold real-time alerts
  //Socket.IO 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userId, setUserId] = useState<string | null>(null);

  //Socket.IO
  useEffect(() => {
    if (!isAuthorized) return;

    //Get the host's userId (from auth token or other source)
    const token = localStorage.getItem("token");
    if (token) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const decoded: any = JSON.parse(atob(token.split(".")[1])); // Decode JWT
      const userId = decoded.userId; // Extract host's userId
      setUserId(userId);

      // Register the host on the Socket.IO server
      socket.emit("register-host", userId);
    }

    // Listen for real-time booking alerts
    socket.on("host-alert", (booking) => {
      setAlerts((prevAlerts) => [
        ...prevAlerts,
        `New booking for listing ${booking.listingId} by user ${booking.userId}`,
      ]);
    });

    // Clean up the socket listener on component unmount
    return () => {
      socket.off("host-alert");
    };
  }, [isAuthorized]);

  if (!isAuthorized) {
    return <Loader />;
  }

  return (
    <div className="max-w-6xl md:mx-auto p-6 mx-4 bg-zinc-900 rounded-lg shadow-lg">
      {/* Navigation */}
      <div className="w-full flex justify-between items-center mb-4">
        <nav className="mb-6 flex items-center text-my-cocoa-500 space-x-2 text-sm">
          <FaHome className="text-my-cocoa-700" />
          <FaChevronRight />
          <button
            onClick={() => router.push("/")}
            className="hover:underline hover:text-my-cocoa-700 transition"
          >
            Home
          </button>
          <FaChevronRight />
          <span className="text-my-cocoa-700 font-semibold">Host Dashboard</span>
        </nav>
      </div>

      {/* Page Header */}
      <h1 className="text-3xl font-bold text-my-cocoa-100 mb-6">Host Dashboard</h1>

      {/* Socket.IO Alerts Section */}
      <div className="bg-zinc-800 border border-my-cocoa-700 rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold text-my-cocoa-100 mb-2">Real-Time Alerts</h2>
        {alerts.length > 0 ? (
          <ul className="list-disc pl-6">
            {alerts.map((alert, index) => (
              <li key={index} className="text-my-cocoa-200">
                {alert}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-my-cocoa-400">No new alerts.</p>
        )}
      </div>

      {/* Listings Manager */}
      <ListingsManager />

      {/* Bookings Manager */}
      <BookingsManager />

      {/* Footer Navigation */}
      <div className="w-full flex justify-center items-center mt-6">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="flex items-center text-my-cocoa-50 bg-my-cocoa-500 px-4 py-2 rounded-lg hover:bg-my-cocoa-600 transition-all"
        >
          <FaArrowLeft className="ml-2" />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default HostDashboard;
