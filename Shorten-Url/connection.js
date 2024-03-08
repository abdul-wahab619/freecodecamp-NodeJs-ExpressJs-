import mongoose from "mongoose";

mongoose.set("strictQuery", true);

async function connectMongoDb(url) {
  try {
    await mongoose.connect(url);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("Mongo Error:", err);
  }
}

export { connectMongoDb };
