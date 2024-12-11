// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const SignUp = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const res = await fetch("/api/auth/signUp", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, email, password }),
//     });

//     const data = await res.json();
//     if (res.ok) {
//       alert("Sign up successful");
//       router.push("/signin");
//     } else {
//       alert(data.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Username"
//         required
//       />
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
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default SignUp;


"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignUp = () => {
  // State variables for the form inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // For password confirmation
  const [loading, setLoading] = useState(false); // To handle loading state
  const [error, setError] = useState(""); // To store error messages
  const router = useRouter();
  const [role, setRole] = useState("user");
  
  // Form validation function
  const validateForm = () => {
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form fields
    if (!validateForm()) return;

    setLoading(true);  // Start loading
    setError("");      // Reset any previous errors

    try {
      const res = await fetch("/api/auth/signUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, role }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Sign up successful");
        router.push("signin");
      } else {
        setError(data.message || "Sign up failed. Please try again.");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);  // Stop loading
    }
  };

  return (
    <div className="h-auto items-center justify-center">
      <div className="max-w-lg mx-auto p-6 bg-black rounded-lg shadow-md my-7">
        <h1 className="text-3xl font-semibold text-center mb-6 text-my-cocoa-100">Sign Up</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username input */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-my-cocoa-50">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
              className="w-full p-3 border border-my-cocoa-300 rounded-md shadow-sm text-my-cocoa-950 focus:outline-none focus:ring-2 focus:ring-my-cocoa-500"
            />
          </div>

          {/* Email input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-my-cocoa-50">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full p-3 border border-my-cocoa-300 rounded-md shadow-sm text-my-cocoa-950 focus:outline-none focus:ring-2 focus:ring-my-cocoa-500"
            />
          </div>

          {/* Password input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-my-cocoa-50">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full p-3 border border-my-cocoa-300 rounded-md shadow-sm text-my-cocoa-950 focus:outline-none focus:ring-2 focus:ring-my-cocoa-500"
            />
          </div>

          {/* Confirm Password input */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-my-cocoa-50">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
              className="w-full p-3 border border-my-cocoa-300 rounded-md shadow-sm text-my-cocoa-950 focus:outline-none focus:ring-2 focus:ring-my-cocoa-500"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-my-cocoa-50">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="w-full p-3 border border-my-cocoa-300 rounded-md shadow-sm text-my-cocoa-950 focus:outline-none focus:ring-2 focus:ring-my-cocoa-500"
            >
              <option value="user">User</option>
              <option value="host">Host</option>
            </select>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-white rounded-md ${loading ? "bg-gray-400" : "bg-my-cocoa-400 hover:bg-my-cocoa-600"} focus:outline-none`}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        {/* Link to Sign In page */}
        <p className="mt-4 text-center text-sm text-my-cocoa-200/50">
        Already have an account?{" "}
          <Link href="signin" className="text-my-cocoa-500 hover:underline">Sign in here</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
