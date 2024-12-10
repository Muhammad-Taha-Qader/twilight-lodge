"use client";

import useAuth from "../../lib/useAuth";
import ListingsManager from "../../components/Admin/ListingsManager";
import BookingsManager from "../../components/Admin/BookingsManager";

const AdminPanel = () => {
  const isAuthorized = useAuth(["admin"]);

  if (!isAuthorized) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-zinc-900 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-my-cocoa-100 mb-6">Admin Panel</h1>
      <ListingsManager />
      <BookingsManager />
    </div>
  );
};

export default AdminPanel;
