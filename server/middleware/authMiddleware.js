const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/config");
const User = require("../model/User");

const userMiddleware = (req, res, next) => {
  // Get token from headers
  const token = req.header("Authorization");

  // Check if token is missing
  if (!token) {
    return res.status(401).json({ message: "Authorization denied." });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, jwtSecret);

    // Add user from payload to req object
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid." });
  }
};

const authMiddleware = async (req, res, next) => {
  // Get token from headers
  const authorizationHeader = req.header("Authorization");

  // Check if token is missing
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Authorization denied. No token provided." });
  }

  // Extract token (remove 'Bearer ' prefix)
  const token = authorizationHeader.substring(7); // Remove 'Bearer ' prefix (7 characters)

  try {
    // Verify token
    const decoded = jwt.verify(token, jwtSecret);

    console.log("decoded :", decoded);

    // Check if user is admin
    const user = await User.findById(decoded.userId);
    if (!user || user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Forbidden. Admin access required." });
    }
    console.log("user :", user);

    // Add user from payload to req object
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid." });
  }
};

module.exports = { userMiddleware, authMiddleware };
