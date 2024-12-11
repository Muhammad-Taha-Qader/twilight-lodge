"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { updateToken } from "@/lib/tokenHelper";

const AuthButton = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in by checking for a token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // If token exists, user is logged in
  }, []);

  // Handle logout
  const handleLogout = () => {
    // localStorage.removeItem("token"); // Remove the token
    updateToken(null); // Remove token and notify components
    setIsLoggedIn(false); // Update the login state
    router.push("/auth/signin"); // Redirect to the sign-in page
  };

  return (
    <div>
      {isLoggedIn ? (
        // Show Logout button if user is logged in
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      ) : (
        // Show Login link if user is not logged in
        <Link
          href="/auth/signin"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default AuthButton;
