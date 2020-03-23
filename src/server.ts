import express from "express";
import feedRoutes from "./api/feed/feed.route";

const app = express();

// Configure Middleware
app.use("/feed", feedRoutes);

export default app;
