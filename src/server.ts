import express from "express";
import feedRoutes from "./routes/feed";

const app = express();

// Configure Middleware
app.use("/feed", feedRoutes);

export default app;
