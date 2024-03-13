const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user.js");

const app = express();
const PORT = 8000;

mongoose
  .connect("mongodb://127.0.0.1:27017/Blogify")
  .then((e) => console.log("MongoDb Connected"));
  
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
