import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_Secret_Key, {
    expiresIn: "15m",
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_Secret_Key);
};
