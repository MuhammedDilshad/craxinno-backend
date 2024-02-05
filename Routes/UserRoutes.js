import express from "express";
import {
  registerController,
  personalData,
  userData,
} from "../controllers/UserController.js";
const router = express.Router();
router.post("/register", registerController);
router.post("/personal", personalData);
router.get("/user/:userId", userData);

export default router;
