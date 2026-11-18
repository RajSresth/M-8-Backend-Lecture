import express from "express";
import {
  login,
  logout,
  register,
  forgotPassword,
  verifyOtp,
  resetPassword,
} from "../controllers/auth.controller.js";
import validate from "../middlewares/validate.js";
import registerSchema from "../schemas/register.schema.js";
import loginSchema from "../schemas/login.schema.js";
const authRouter = express.Router();

authRouter.post("/register", validate(registerSchema), register);
authRouter.post("/login", validate(loginSchema), login);
authRouter.get("/logout", logout);
authRouter.post("/forgot-password", forgotPassword);
authRouter.post("/verify-otp", verifyOtp);
authRouter.post("/reset-password", resetPassword);

export default authRouter;
