import express from "express";
import urlRoute from "./routes/url.js";
import { connectMongoDb } from "./connection.js";
import URL from "./models/url.js";

const app = express();
const PORT = 8002;

connectMongoDb("mongodb://127.0.0.1:27017/short-url");

app.use(express.json());

app.use("/url", urlRoute);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});


app.listen(PORT, () => console.log(`Server Started at: ${PORT}`));
