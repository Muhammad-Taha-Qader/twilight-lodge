import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../../models/User";
import dbConnect from "../../../lib/db";

const signUp = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { username, email, password, role } = req.body;

  // Validate input
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await dbConnect();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role: role || "user", // Default to "user" if no role is provided
    });

    try {
      await newUser.save(); // Save user to database

      // Create JWT token
      const token = jwt.sign(
        { userId: newUser._id, role: newUser.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );

      // Respond with success message
      return res.status(201).json({ message: "User created successfully", token });
    } catch (saveError) {
      // If saving the user fails (e.g., duplicate key error)
      console.error("Error saving user:", saveError.message);
      return res.status(500).json({ message: "Failed to create user. Try again." });
    }
  } catch (error) {
    console.error("Server error:", error.message);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
};

export default signUp;
