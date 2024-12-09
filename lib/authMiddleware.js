import jwt from "jsonwebtoken";

export const authMiddleware = (handler, roles = []) => {
  return async (req, res) => {
    const token = req.headers["authorization"]?.split(" ")[1]; // Expecting "Bearer <token>"
    // $$$$$ getting token:
    // --- Client Side:
    // Store the token in localStorage after login.
    // For subsequent API calls, retrieve the token from localStorage and include it in the request's Authorization header.
    //only then req.headers["authorization"]?.split(" ")[1]; at server side will be able to et the token from the req header
    // like in app/profile we did (after checking for frontend role base access by useAuth) :
    //     const profileResponse = await fetch("/api/profile", {
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem("token")}`,
    //       },
    //     });
    // then api redirected it to middleware for backend route security: 
    // export default authMiddleware(handler, ["user", "host", "admin"]);


    // --- Server Side:
    // Use the authMiddleware to extract and verify the token from the Authorization header.
    //    is used to extract the JWT token from the Authorization header in an incoming HTTP request. This method assumes that the token is sent as part of the request header.
    // The token is then decoded, and user data is attached to req.user for use in API routes.

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
