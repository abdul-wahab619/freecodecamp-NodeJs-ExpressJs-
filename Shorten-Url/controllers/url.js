import { nanoid } from "nanoid";
import URL from "../models/url.js"; // Assuming URL is exported as default from "../models/url.js"

async function handleGenerateShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required!" });

  const shortID = nanoid(4);
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.render("home", {
    id: shortID,
  });
}
async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClick: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

export { handleGenerateShortURL, handleGetAnalytics }; // Export the function for ES Modules
