"use client";

import useAuth from "../../lib/useAuth";

const AdminPanel = () => {
  const isAuthorized = useAuth(["admin"]); // Only allow admins

  if (!isAuthorized) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <p>Welcome, Admin! Here you can manage listings and bookings.</p>
    </div>
  );
};

export default AdminPanel;
