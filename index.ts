import express from "express";
import dotenv from "dotenv";
import { errorHandler } from "./src/middlewares/errorHandler";
import { dbConnection } from "./src/middlewares/dbConnection";
import { router } from "./src/routes";

const app = express();
app.use(express.json());
dotenv.config(); // to be able to use env file.

const port = process.env.PORT || 8000;

app.use(router);

//middlewares
dbConnection();
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`);
});
