"use client";

import useAuth from "../../lib/useAuth";
import ListingsManager from "../../components/Host/HostListingsManager";
import BookingsManager from "../../components/Host/HostBookingsManager";
import Loader from "@/components/Animations/Loader";
import {  FaHome, FaChevronRight, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const HostDashboard = () => {
  const router = useRouter();
  const isAuthorized = useAuth(["host"]);

  if (!isAuthorized) {
    return <Loader/>;
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
      {/* Page */}
      <h1 className="text-3xl font-bold text-my-cocoa-100 mb-6">Host Dashboard</h1>
      <ListingsManager />
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
