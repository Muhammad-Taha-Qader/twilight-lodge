//Create a higher-order component (HOC) or a custom hook to check user authentication and redirect unauthenticated users to the login page.
//Custom Hook for Protected Frontend Pages (lib/useAuth.js)
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const useAuth = (roles = []) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/auth/signin"); // Redirect to login if no token
    } else {
      const payload = JSON.parse(atob(token.split(".")[1])); // Decode JWT
      if (roles.length && !roles.includes(payload.role)) {
        router.push("/"); // Redirect to home if insufficient permissions
      } else {
        setIsAuthorized(true);
      }
    }
  }, [router, roles]);

  return isAuthorized;
};

export default useAuth;
