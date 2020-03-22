import app from "./server";
import { createConnection } from "typeorm";

const port = 3000;

createConnection()
  .then(async connection => {
    app.listen(port, () => {
      console.info("server is listening");
    });
  })
  .catch(error => console.error(error));
