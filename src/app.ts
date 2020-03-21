import express from "express";
import feedRoutes from "./routes/feed";
import { createConnection } from "typeorm";

const app = express();
createConnection()
  .then(async connection => {
    const port = 3000;

    app.use("/feed", feedRoutes);

    app.listen(port, err => {
      console.info("server is listening");
    });
  })
  .catch(error => console.error(error));

export default app;
