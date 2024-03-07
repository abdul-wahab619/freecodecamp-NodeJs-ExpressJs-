const User = require("../models/user");
async function getAllUsers(req, res) {
  try {
    const allDBUsers = await User.find({});
    res.json(allDBUsers);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "user no found!" });
  return res.json(user);
}

async function updateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "changed" });
  return res.json({ status: "success" });
}

async function deleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "successfully deleted" });
}

async function createUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ message: "All fields are required!" });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTile: body.job_title,
  });
  return res
    .status(201)
    .json({ message: "User Created successfully", id: result._id });
}

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  createUser,
};
