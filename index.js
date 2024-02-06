import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ConnectDB } from "./Config/connection.js";
import userRoutes from "./Routes/UserRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

ConnectDB();

// Routes
app.use("/auth", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
