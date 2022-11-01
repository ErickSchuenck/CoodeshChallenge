import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routers/router";
import errorHandler from "./middlewares/errorHandler";

dotenv.config();

const cron = require("node-cron");
cron.schedule("* * * * * *", () => {
  console.log("Every Second");
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

console.log;

export default app;
