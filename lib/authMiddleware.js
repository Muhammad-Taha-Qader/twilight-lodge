import jwt from "jsonwebtoken";

export const authMiddleware = (handler, roles = []) => {
  return async (req, res) => {
    const token = req.headers["authorization"]?.split(" ")[1]; // Expecting "Bearer <token>"

    if (!token) {
      return res.status(401).json({ message: "Unauthorized access. Token missing." });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach user information to the request
      req.user = decoded;

      // If roles are specified, check the user's role
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ message: "Forbidden. Insufficient permissions." });
      }

      // Proceed to the actual handler
      return handler(req, res);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized access. Invalid or expired token." });
    }
  };
};
