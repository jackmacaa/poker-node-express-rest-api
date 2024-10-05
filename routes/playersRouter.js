import express from "express";
import {
  getPlayers,
  getPlayer,
  createPlayer,
  deletePlayer,
  editPlayer,
} from "../controllers/playerController.js";

const router = express.Router();

// Get all players
router.get("/", getPlayers);

// Get single player
router.get("/:id", getPlayer);

// Create new player
router.post("/", createPlayer);

// Edit single player
router.put("/:id", editPlayer);

// Delete player
router.delete("/:id", deletePlayer);

export default router;
