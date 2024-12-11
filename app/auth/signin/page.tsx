"use client";
import Link from "next/link";

// import { useState } from "react";
// import { useRouter } from "next/router";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const res = await fetch("/api/auth/signIn", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();
//     if (res.ok) {
//       localStorage.setItem("token", data.token); // Store the JWT token
//       router.push("/");
//     } else {
//       alert(data.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         required
//       />
//       <button type="submit">Sign In</button>
//     </form>
//   );
// };

// export default SignIn;



import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { updateToken } from "@/lib/tokenHelper";


const SignIn = () => {
  const [email, setEmail] = useState("");        // State to store email input
  const [password, setPassword] = useState("");   // State to store password input
  const [loading, setLoading] = useState(false);  // State to manage loading spinner or button disable state
  const [error, setError] = useState("");         // State to store error message
  const router = useRouter();                     // Next.js router to handle page redirection

  // Check if user is already logged in by looking for a token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // If token exists, redirect to the homepage or dashboard
      router.push("/");
    }
  }, [router]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();  // Prevent page reload on form submission

    setLoading(true);  // Set loading to true to show some loading indicator (like a spinner)
    setError("");      // Clear any previous error messages

    try {
      // Send a POST request to the backend API for sign-in
      const res = await fetch("/api/auth/signIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }), // Send email and password in the request body
      });

      const data = await res.json();  // Parse the response from the server

      if (res.ok) {
        // On successful login, store the JWT token in localStorage
        // localStorage.setItem("token", data.token); 
        //$$$ lib/tokenHelper.ts       Will now update the token in localStorage and emits a custom event to notify other components (we are using it so that over nav bar profile component can be aware of any change in login state and and can update it self accordingly, previously it wasn't needed as nav wasn't in layout and useEffect( , []) was fine). it's instead of 'localStorage.setItem("token", data.token);' in auth/signin .tsx
        updateToken(data.token); // Save token and notify components

        // Redirect the user to the homepage (or dashboard)
        router.push("/");
      } else {
        // If login fails, set the error state with the message from the backend
        setError(data.message || "Login failed");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // If there is any error during the fetch request, set the error state
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);  // Set loading to false after the request is complete
    }
  };

  return (
    <div className="max-w-md mx-auto bg-black p-4">
      <h1 className="text-2xl font-semibold text-center mb-6 text-my-cocoa-100">Sign In</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email input */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // Update email state on change
          placeholder="Email" 
          required
          className="w-full p-2 border border-my-cocoa-300 rounded-md shadow-sm text-my-cocoa-950 focus:outline-none focus:ring-2 focus:ring-my-cocoa-500"
        />

        {/* Password input */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  // Update password state on change
          placeholder="Password"
          required
          className="w-full p-2 border border-my-cocoa-300 rounded-md shadow-sm text-my-cocoa-950 focus:outline-none focus:ring-2 focus:ring-my-cocoa-500"
        />

        {/* Error message */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Submit button */}
        <button
          type="submit"
          // className="w-full p-2 bg-blue-500 text-white rounded-md"
          className={`w-full py-3 text-white rounded-md ${loading ? "bg-gray-400" : "bg-my-cocoa-400 hover:bg-my-cocoa-600"} focus:outline-none`}
          disabled={loading}  // Disable button while the request is in progress
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Do not have an account?{" "}
        <Link href="signup" className="text-my-cocoa-500 hover:underline">
          Sign up here
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
