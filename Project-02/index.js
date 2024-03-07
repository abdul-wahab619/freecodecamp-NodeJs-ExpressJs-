const express = require("express");
const users = require("./MOCK_DATA.json");
const mongoose = require("mongoose");
const fs = require("fs");

const app = express();
const PORT = 9000;

// mongoose connection
mongoose
  .connect("mongodb://127.0.0.1:27017/mongoapp-1")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error:", err));

// Schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    jobTile: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = new mongoose.model("user", userSchema);

// middleware -> assume as a plugin
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `${Date.now()}: ${req.method}: ${req.ip}: ${req.path} \n`,
    (err, data) => {
      next();
    }
  );
});

// HTML response for /users
app.get("/users/html", async (req, res) => {
  const allDBUsers = await User.find({});
  const html = `
        <ul>
            ${allDBUsers
              .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
              .join("")}
        </ul>`;
  res.send(html);
});

// JSON response for /users
app.get("/users", async (req, res) => {
  const allDBUsers = await User.find({});
  res.json(allDBUsers);
});

// Rest api routes
app.get("/api/users", async (req, res) => {
  const allDBUsers = await User.find({});
  return res.json(allDBUsers);
});

app
  .route("/api/users/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "user no found!" });
    return res.json(user);
  })
  .patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastName: "changed" });
    return res.json({ status: "success" });
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "successfully deleted" });
  });

app.post("/api/users", async (req, res) => {
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
  //console.log("result", result);
  return res.status(201).json({ message: "User Created successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is Started at PORT: ${PORT}`);
});
