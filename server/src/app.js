import express from "express";
import authRoutes from "./auth/routes/authRoutes.js";
import cors from "cors";
import userRoutes from "./auth/routes/userRoutes.js";

const app = express();

// ? Middlewares
app.use(cors());
app.use(express.json());

/* <----- Routes -----> */

// * Health check of the server
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Campus Issue Tracker API is running.",
  });
});

// * Authentication
app.use("/api/auth", authRoutes);

// * Users
app.use("/api", userRoutes)

export default app;
