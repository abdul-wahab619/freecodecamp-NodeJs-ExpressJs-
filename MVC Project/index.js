const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");

const { connectMongoDb } = require("./connection.js");
const { logReqRes } = require("./middlewares");
const userRoute = require("./routes/user.js");

const app = express();
const PORT = 9000;

// connection
connectMongoDb("mongodb://127.0.0.1:27017/mongoapp-1");

// middleware -> assume as a plugin
app.use(express.urlencoded({ extended: false }));
// next middleware => logs
app.use(logReqRes("./log.txt"));

// routes
app.use("/api/users", userRoute);

app.listen(PORT, () => {
  console.log(`Server is Started at PORT: ${PORT}`);
});
