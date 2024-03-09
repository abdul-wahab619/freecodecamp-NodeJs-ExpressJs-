import express from "express";
import URL from "../models/url.js";
import { checkAuthentication, restrictedTo } from "../middlewares/auth.js";

const router = express.Router();

router.get(
  "/admin/urls",
  checkAuthentication,
  restrictedTo(["ADMIN"]),
  async (req, res) => {
    const allurls = await URL.find({});
    return res.render("home", {
      urls: allurls,
    });
  }
);

router.get("/", restrictedTo(["NORMAL", "ADMIN"]), async (req, res) => {
  const allurls = await URL.find({ createdBy: req.user._id });
  return res.render("home", {
    urls: allurls,
  });
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

export default router;
