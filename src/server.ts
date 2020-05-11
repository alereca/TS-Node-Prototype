import express from "express";
import feedRoutes from "./api/feed/feed.route";
import bodyParser from "body-parser";
import { errorHandlingMiddleware } from "./middlewares/error.middleware";
import { logger } from "./logger";

const app = express();

// Configure Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/feed", feedRoutes);

app.use(errorHandlingMiddleware(logger));

export default app;
