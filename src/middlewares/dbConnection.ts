import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const admin = process.env.POSTGRE_ADMIN;
const password = process.env.POSTGRE_PASS;
const dbName = process.env.POSTGRE_DB;
const dbHost = process.env.POSTGRE_HOST;

export const sequelize = new Sequelize(
  `postgres://${admin}:${password}@${dbHost}/${dbName}`
);

export const dbConnection = () => {
  // Synchronization:
  //! SYNC MUST RUN ONCE!
  sequelize.sync(); // CREATE TABLE
  // sequelize.sync({ force: true }) // DROP & CREATE
  // sequelize.sync({ alter: true }) // TO BACKUP & DROP & CREATE & FROM BACKUP

  // Connect:
  sequelize
    .authenticate()
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log("Can Not Connect", err));
};
