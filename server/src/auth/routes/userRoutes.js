import express from "express";
import { authenticate } from "../../middleware/authMiddleware.js";
import { UserRole } from "../../constants/userRole.js";
import { userByEmail, userById } from "../controllers/userController.js";

// * Create the router
const userRoutes = express.Router();

// ? Endpoints / Routes
userRoutes.get("/users:id", authenticate, authorize(UserRole.Admin), userById);

userRoutes.get(
  "/users/email",
  authenticate,
  authorize(UserRole.Admin),
  userByEmail,
);

export default userRoutes;
