import User from "../../models/User";
import dbConnect from "../../lib/db";
import { authMiddleware } from "../../lib/authMiddleware";

const handler = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await dbConnect();

  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export default authMiddleware(handler, ["user", "host", "admin"]);
