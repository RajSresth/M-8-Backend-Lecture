import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import { generateToken } from "../utils/jwt.utils.js";

export const register = async (req, res, next) => {
  try {
    const { fullname, email, password, role } = req.validUser;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("User Already Exists");
    }

    // password Hash
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullname,
      email,
      password: hashPassword,
      role,
    });

    return res.status(201).json({
      success: true,
      message: "User Registered",
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password, role } = req.validUser;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const err = new Error("Invalid Email");
      err.status = 400;
      next(err);
    }

    if (existingUser.role != role) {
      const err = new Error("Invalid Role No such user exist");
      err.status = 400;
      next(err);
    }

    const isPasswordMatched = await bcrypt.compare(
      password,
      existingUser.password,
    );

    if (!isPasswordMatched) {
      const err = new Error("Invalid Password");
      err.status = 400;
      next(err);
    }

    const jwtToken = generateToken({
      id: existingUser._id,
      email: existingUser.email,
      role: existingUser.role,
    });
    console.log("jwtToken:", jwtToken);

    res.cookie("token", jwtToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      path: "/products",
      domain: "www.demo.com",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "User Loggedin Successfully",
      user: {
        id: existingUser._id,
        fullname: existingUser.fullname,
        email: existingUser.email,
        role: existingUser.role,
      },
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

export const logout = () => {};

export const resetPassword = () => {};
