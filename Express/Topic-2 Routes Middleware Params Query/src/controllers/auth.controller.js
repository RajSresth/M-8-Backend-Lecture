import bcrypt from "bcrypt";
import User from "../models/userModel.js";

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

export const login = () => {};

export const logout = () => {};
