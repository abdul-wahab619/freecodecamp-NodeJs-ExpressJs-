const express = require("express");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  createUser,
} = require("../controllers/user.js");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.patch("/:id", updateUserById);
router.delete("/:id", deleteUserById);
router.post("/", createUser);

module.exports = router;

//2nd method
// router
//   .route("/:id")
//   .get(getUserById)
//   .patch(updateUserById)
//   .delete(deleteUserById);
// router.route("/").get(getAllUsers).post(createUser);
