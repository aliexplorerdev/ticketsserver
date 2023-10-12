import express from "express";
import cors from "cors";
import { envVars, corsOptions } from "./config/env_Config.js";
import { requestLogger } from "./middlewares/logger.middleware.js";
import { DBconnection } from "./config/db/dbConnection.js";
const app = express();
app.use(cors(corsOptions));
app.use(requestLogger);
app.get("/", (req, res) => {
  res.send("Hello, Express with Winston Logger!");
});
(() => {
  DBconnection();
  app.listen(envVars.APP_PORT, () => {
    console.log(`[server]: Server is running on port ${envVars.APP_PORT}`);
  });
})();
