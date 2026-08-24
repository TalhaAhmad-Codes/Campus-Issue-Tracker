import express from "express";
import cors from "cors";

const app = express();

// ? Middlewares
app.use(cors());
app.use(express.json());

// ? Health check
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Campus Issue Tracker API is running."
    });
});

export default app;