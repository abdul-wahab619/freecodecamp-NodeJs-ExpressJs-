import jwt from "jsonwebtoken";
import User from "../models/user.js"; // Assuming you have a User model defined

const secret = "your_secret_key_here"; // Replace with your actual secret key

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
    },
    secret
  );
}

async function getUser(token) {
  try {
    if (!token) return null;

    // Verify the JWT token
    const decoded = jwt.verify(token, secret);

    // Retrieve the user from the database based on the decoded token
    const user = await User.findById(decoded._id);

    return user;
  } catch (error) {
    console.error("JWT verification error:", error.message);
    return null;
  }
}

export { setUser, getUser };
