import express from "express";
import { createConnection } from "typeorm";
import feedRoutes from "./routes/feed";

const app = express();
createConnection();
const port = 3000;

app.use("/feed", feedRoutes);

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log("server is listening");
});

export default app;
