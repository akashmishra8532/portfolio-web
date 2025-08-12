import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRouter from "./routes/contact.routes.js";
import { notFoundHandler, errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

// Basic security and parsing
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());
app.use(morgan("dev"));

// Healthcheck
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "portfolio-api" });
});

// Routes
app.use("/api/contact", contactRouter);

// 404 and error handlers
app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

// Connect to MongoDB only if MONGO_URI provided
async function start() {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (mongoUri && mongoUri.trim().length > 0) {
      await mongoose.connect(mongoUri);
      console.log("Connected to MongoDB");
    } else {
      console.log("MONGO_URI not set. Skipping MongoDB connection.");
    }

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

start();



