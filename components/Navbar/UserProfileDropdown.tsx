"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HiOutlineLogout, HiOutlineLogin, HiOutlineUser, HiOutlineCog, HiOutlineMenu } from "react-icons/hi";

const UserProfileDropdown: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState<"user" | "host" | "admin" | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  // // Fetch user authentication state and role
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     try {
  //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //       const decoded: any = JSON.parse(atob(token.split(".")[1])); // Decode JWT
  //       setIsAuthenticated(true);
  //       setRole(decoded.role);
  //     } catch (error) {
  //       console.error("Error decoding token:", error);
  //       setIsAuthenticated(false);
  //       setRole(null);
  //     }
  //   } else {
  //     setIsAuthenticated(false);
  //     setRole(null);
  //   }
  // }, []);

  //$$$ lib/tokenHelper.ts       Will now update the token in localStorage and emits a custom event to notify other components (we are using it so that over nav bar profile component can be aware of any change in login state and and can update it self accordingly, previously it wasn't needed as nav wasn't in layout and useEffect( , []) was fine). it's instead of 'localStorage.setItem("token", data.token);' in auth/signin .tsx
  //updateToken()  is now called by all login and logout functions
  const fetchAuthState = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const decoded: any = JSON.parse(atob(token.split(".")[1])); // Decode JWT
        setIsAuthenticated(true);
        setRole(decoded.role);
      } catch (error) {
        console.error("Error decoding token:", error);
        setIsAuthenticated(false);
        setRole(null);
      }
    } else {
      setIsAuthenticated(false);
      setRole(null);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchAuthState();

    // Listen for custom "tokenUpdated" events
    const handleTokenUpdate = () => {
      fetchAuthState();
    };

    window.addEventListener("tokenUpdated", handleTokenUpdate);

    // Cleanup event listener
    return () => {
      window.removeEventListener("tokenUpdated", handleTokenUpdate);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavigation = (path: string) => {
    setIsOpen(false); // Close dropdown on navigation
    router.push(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setRole(null);
    router.push("/auth/signin"); // Redirect to login page after logout
  };

  return (
    <div className="relative">
      {/* Profile Icon Button */}
      <button
        className="flex items-center space-x-2 border-2 px-6 py-3 rounded-full shadow-sm border-my-cocoa-400 hover:border-my-cocoa-600 hover:text-my-cocoa-600"
        onClick={toggleDropdown}
      >
        <HiOutlineMenu className="h-6 w-6 text-my-cocoa-400" />
        <HiOutlineUser className="h-6 w-6 text-my-cocoa-400" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-my-cocoa-400 rounded-lg shadow-lg z-50">
          <div className="p-2 space-y-2 text-my-cocoa-200">
            {isAuthenticated ? (
              <>
                {/* Profile Button */}
                <button
                  onClick={() => handleNavigation("/profile")}
                  className="w-full text-left px-4 py-2 hover:bg-zinc-800 rounded-lg"
                >
                  <HiOutlineUser className="inline-block mr-2 h-5 w-5" />
                  Profile
                </button>

                {/* Host Panel Button (Only for Hosts) */}
                {role === "host" && (
                  <button
                    onClick={() => handleNavigation("/host-panel")}
                    className="w-full text-left px-4 py-2 hover:bg-zinc-800 rounded-lg"
                  >
                    <HiOutlineCog className="inline-block mr-2 h-5 w-5" />
                    Host Panel
                  </button>
                )}

                {/* Admin Panel Button (Only for Admins) */}
                {role === "admin" && (
                  <button
                    onClick={() => handleNavigation("/admin")}
                    className="w-full text-left px-4 py-2 hover:bg-zinc-800 rounded-lg"
                  >
                    <HiOutlineCog className="inline-block mr-2 h-5 w-5" />
                    Admin Panel
                  </button>
                )}

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-500 hover:bg-zinc-800 rounded-lg"
                >
                  <HiOutlineLogout className="inline-block mr-2 h-5 w-5" />
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Login Button */}
                <button
                  onClick={() => handleNavigation("/auth/signin")}
                  className="w-full text-left px-4 py-2 text-green-500 hover:bg-zinc-800 rounded-lg"
                >
                  <HiOutlineLogin className="inline-block mr-2 h-5 w-5" />
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropdown;