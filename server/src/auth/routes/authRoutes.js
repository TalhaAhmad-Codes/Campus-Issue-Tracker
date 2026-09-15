import express from "express";
import { register, login } from "../controllers/authController.js";
import { authenticate } from "../../middleware/authMiddleware.js";
import validate from "../../middleware/validationMiddleware.js";
import { registerUserValidator } from "../validators/registerUserValidator.js";

// * Create the router
const authRoutes = express.Router();

// ? Endpoints / Routes
authRoutes.post("/register", validate(registerUserValidator), register); // * Register a user

authRoutes.get("/login", login); // * Login the user

authRoutes.get("/me", authenticate, (req, res) => {
  // * Get the user
  return res.status(200).json({
    success: true,
    data: req.user,
  });
});

export default authRoutes;
