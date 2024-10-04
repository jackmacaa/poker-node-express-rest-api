import express from "express";
import {
  getPlayers,
  getPlayer,
  createPlayer,
  createPlayerView,
  deletePlayer,
  editPlayer,
} from "../controllers/playerController.js";

const router = express.Router();

// Get all posts
router.get("/", getPlayers);

// // Edit single player
router.put("/:id", editPlayer);

// Get single player
router.get("/:id", getPlayer);

// // Create new post
router.post("/", createPlayer);

router.get("/createPlayer", createPlayerView);

// Delete Post
router.delete("/:id", deletePlayer);

export default router;
