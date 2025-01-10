import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Use sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST as string,
    port: Number(process.env.DB_PORT) || 5432,
    dialect: "postgres",
    logging: process.env.DB_LOGGING === "true" ? console.log : false,
  }
);

export default sequelize;
