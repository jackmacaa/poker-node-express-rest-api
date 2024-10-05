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
router.get("/api/players", getPlayers);

// Get single player
router.get("/api/players/:id", getPlayer);

// Create new player
router.post("/api/players", createPlayer);

// Edit single player
router.put("/api/players/:id", editPlayer);

// Delete player
router.delete("/api/players/:id", deletePlayer);

export default router;
