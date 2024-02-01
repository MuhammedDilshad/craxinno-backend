import express from "express";
import {
  registerController,
  personalData,
} from "../controllers/UserController.js";
const router = express.Router();
router.post("/register", registerController);
router.post("/personal", personalData);

export default router;
