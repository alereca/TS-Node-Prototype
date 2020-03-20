import express from "express";

const app = express();
const port = 3000;

const feedRoutes = require("./Routes/feed");

app.use("/feed", feedRoutes);

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log("server is listening");
});

export default app;
