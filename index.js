import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

import { ConnectDB } from "./Config/connection.js";
import userRoutes from "./Routes/UserRoutes.js";

// Middleware
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
ConnectDB();

const port = process.env.PORT;

app.listen(port, () => {
  console.log("started");
});

app.use("/auth", userRoutes);
