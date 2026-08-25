import express from "express";
import { register } from "../controllers/authController.js";

// * Create the router
const router = express.Router();

// ? Endpoints / Routes
router.post("/register", register);

export default router;