require("dotenv").config();
import "module-alias/register";
import express from "express";
import path from "path";
import morgan from "morgan";
import route from "./routes";
import Mongodb from "./config/database/Mongodb";
import { AuthMiddleware } from "./app/middleware/AuthMiddleware";
const app: any = express();
const port = 3000;
app.use(express.urlencoded({ extends: true }));
app.use(express.json());
Mongodb.connect();
app.use(morgan("combined"));
app.get("/", (req, res) => {
  res.send("The sedulous hyena ate the con cac21");
});

app.use(AuthMiddleware);
route(app);

app.listen(port, (error: void) => {
  return console.log(`server is listening on ${port}`);
});
