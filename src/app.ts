import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res, next) =>
  res.json({
    message: "there you are"
  })
);

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log("server is listening");
});

export default app;
