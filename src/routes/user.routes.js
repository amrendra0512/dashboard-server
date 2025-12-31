import express from "express";
import { register, login } from "../controllers/user.controller.js";
import auth from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/profile", auth, (req, res) => {
  res.json({ message: "Protected profile", userId: req.user.id });
});

export default router;
