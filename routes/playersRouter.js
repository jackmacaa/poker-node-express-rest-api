import express from "express";
import {
  getPlayers,
  createPlayer,
  deletePlayer,
} from "../controllers/playerController.js";

const router = express.Router();

// Get all posts
router.get("/", getPlayers);

// // Get single post
// router.get("/:id", getPost);

// // Create new post
router.post("/", createPlayer);

// // Update Post
// router.put("/:id", updatePost);

// Delete Post
router.delete("/:id", deletePlayer);

export default router;
