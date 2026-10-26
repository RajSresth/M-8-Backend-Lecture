import express from "express";
import helmet from "helmet";
import cors from "cors";
import productRoutes from "./routes/product.routes.js";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";

const app = express();

// Built in Middleware
app.use(express.json());

// Third Party Middleware
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

// Application-Logger Middleware
app.use((req, res, next) => {
  console.log("Log:", req.url);

  next();
});

// Routes Defined
app.use("/api/v1/product", productRoutes);

// Centralised Error Handling Middleware
app.use((err, req, res, next) => {
  if (err) {
    return res.status(err.status || 500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
});

const PORT = process.env.PORT || 4600;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
