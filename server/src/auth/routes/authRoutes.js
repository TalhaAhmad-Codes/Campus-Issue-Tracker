import express from "express";
import { register, login } from "../controllers/authController.js";

// * Create the router
const router = express.Router();

// ? Endpoints / Routes
router.post("/register", register);
router.get("/login", login)

export default router;