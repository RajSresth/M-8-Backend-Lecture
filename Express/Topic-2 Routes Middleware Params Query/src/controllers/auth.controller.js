import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import { generateToken } from "../utils/jwt.utils.js";
import sendEmail from "../utils/sendEmail.js";

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

export const logout = (req, res, next) => {
  try {
    res.clearCookie("token");

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const err = new Error("Invalid Email");
      err.status = 400;
      return next(err);
    }

    const otp = Math.floor(1000 + Math.random() * 9000);
    existingUser.otp = otp;
    existingUser.OtpExpiry = Date.now() + 5 * 60 * 1000;
    await existingUser.save();

    await sendEmail({
      to: existingUser.email,
      subject: "Password Reset OTP",
      html: `
        <h2>Password Reset</h2>
        <p>Your OTP is:</p>
        <h1>${otp}</h1>
        <p>This OTP expires in 5 minutes.</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Otp has been sent on your registered email",
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

export const verifyOtp = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const err = new Error("Invalid Email");
      err.status = 400;
      return next(err);
    }

    if (!otp) {
      console.log("otp if block");
      const err = new Error("Invalid Otp");
      err.status = 400;
      return next(err);
    }

    const currentTime = Date.now();

    if (currentTime > existingUser.OtpExpiry.getTime()) {
      const err = new Error("Otp expired");
      err.status = 400;

      existingUser.otp = null;
      existingUser.OtpExpiry = null;
      existingUser.save();

      return next(err);
    }

    const isOtpMatched = existingUser.otp == otp;

    if (!isOtpMatched) {
      const err = new Error("Invalid Otp");
      err.status = 400;
      return next(err);
    }

    existingUser.otp = null;
    existingUser.OtpExpiry = null;
    existingUser.isOtpVerified = true;
    await existingUser.save();

    return res.status(200).json({
      success: true,
      message: "OTP verified successfully",
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    const { email, password, confirmPassword } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const err = new Error("Invalid Email");
      err.status = 400;
      return next(err);
    }

    if (!existingUser.isOtpVerified) {
      const err = new Error("Please verify otp");
      err.status = 400;
      return next(err);
    }

    if (password !== confirmPassword) {
      const err = new Error("Password not matched");
      err.status = 400;
      return next(err);
    }
    const hashPassword = await bcrypt.hash(password, 10);

    existingUser.password = hashPassword;
    await existingUser.save();

    return res.status(201).json({
      success: true,
      message: "Password Changed successfully",
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};
