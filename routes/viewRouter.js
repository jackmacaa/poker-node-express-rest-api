import express from "express";
import playersDB from "../controllers/playerController.js";

const router = express.Router();

// Get home page
router.get("/", (req, res) => {
  res.render("index", { playersDB });
});

// Get home page
router.get("/createPlayer", (req, res) => {
  res.render("createPlayer");
});

export default router;
