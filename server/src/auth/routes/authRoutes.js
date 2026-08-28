import express from "express";
import { register, login } from "../controllers/authController.js";
import { authenticate } from "../../middleware/authMiddleware.js";

// * Create the router
const router = express.Router();

// ? Endpoints / Routes
router.post("/register", register);                 // * Register a user
router.get("/login", login);                        // * Login the user
router.get("/me", authenticate, (req, res) => {     // * Get the user
  return res.status(200).json({
    success: true,
    data: req.user,
  });
});

export default router;
