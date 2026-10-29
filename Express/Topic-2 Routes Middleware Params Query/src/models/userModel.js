import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Fullname is required"],
      minlength: [3, "Fullname must be at least 3 characters long"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
      trim: true
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      default: "user",
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true },
);

const User = new mongoose.model("User", userSchema);
export default User;
