"use client";

import useAuth from "../../lib/useAuth";
import ListingsManager from "../../components/Host/HostListingsManager";
import BookingsManager from "../../components/Host/HostBookingsManager";
import Loader from "@/components/Animations/Loader";

const HostDashboard = () => {
  const isAuthorized = useAuth(["host"]);

  if (!isAuthorized) {
    return <Loader/>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-zinc-900 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-my-cocoa-100 mb-6">Host Dashboard</h1>
      <ListingsManager />
      <BookingsManager />
    </div>
  );
};

export default HostDashboard;
