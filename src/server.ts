import express from "express";
import feedRoutes from "./api/feed/feed.route";
import bodyParser from "body-parser";

const app = express();

// Configure Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/feed", feedRoutes);

export default app;
