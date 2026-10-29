import express from "express";
import helmet from "helmet";
import cors from "cors";
import productRoutes from "./routes/product.routes.js";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
const app = express();


app.use(express.json());
app.use(helmet());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "https://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
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
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/product", productRoutes);

// Centralised Error Handling Middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 4600;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
