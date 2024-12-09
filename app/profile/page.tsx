"use client";

import useAuth from "../../lib/useAuth";

const ProfilePage = () => {
  const isAuthorized = useAuth(["user", "host", "admin"]); // Allow all authenticated roles

  if (!isAuthorized) {
    return <p>Loading...</p>; // Show loading until authentication is verified
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
      <p>Welcome to your profile page!</p>
    </div>
  );
};

export default ProfilePage;
