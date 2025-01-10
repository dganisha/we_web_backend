import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import sequelize from "./config/database";
import listEndpoints from "express-list-endpoints";
import router from "./routes/router";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Konfigurasi CORS
const allowedOrigins = ["http://localhost:8080"];
const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
};
app.use(cors(corsOptions));

// Route V1
app.use("/api/v1", router);

// Daftar semua endpoint
const endpoints = listEndpoints(app);
console.log("Registered Endpoints:");
console.table(
  endpoints.map((endpoint) => ({
    path: endpoint.path,
    methods: endpoint.methods.join(", "),
  }))
);

const PORT = process.env.PORT || 5000;

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully.");
    return sequelize.sync();
  })
  .then(() => {
    // Menjalankan server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default app;
