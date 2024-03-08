import User from "../models/user.js";
import { setUser } from "../service/auth.js";
import jwt from "jsonwebtoken";

const secret = "Abdul123@#"; // Hardcoded secret (not recommended, use environment variables)

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;

  try {
    // Create the user in the database
    const newUser = await User.create({
      name,
      email,
      password,
    });

    // Generate JWT token
    const token = setUser(newUser);

    // Set JWT token as cookie
    res.cookie("uid", token);

    return res.redirect("/");
  } catch (error) {
    console.error("Error signing up user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // If user not found or password doesn't match, return error
    if (!user || user.password !== password) {
      return res.render("login", {
        error: "Invalid Username or Password",
      });
    }

    // Generate JWT token
    const token = setUser(user);

    // Set JWT token as cookie
    res.cookie("uid", token);

    return res.redirect("/");
  } catch (error) {
    console.error("Error logging in user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export { handleUserSignup, handleUserLogin };
