import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";
import validate from "../middlewares/validate.js";
const authRouter = express.Router();

authRouter.post("/register", validate, register);
authRouter.post("/login", login);
authRouter.get("/logout", logout);

export default authRouter;
