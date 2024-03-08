import express from "express";
import {
  handleGenerateShortURL,
  handleGetAnalytics,
} from "../controllers/url.js";

const router = express.Router();

router.post("/", handleGenerateShortURL);

router.get("/analytics/:shortId", handleGetAnalytics);

export default router;
