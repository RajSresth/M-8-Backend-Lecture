import express from "express";
import productRoutes from "./routes/product.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Global Middlewares
app.use(express.json());

// Routes Defined
app.use("/api/v1/product", productRoutes);


// Centralised Error Handling Middleware
app.use((err,req,res,next) => {

  if(err)
  {
    return res.status(err.status || 500).json({
      success: false,
      message: err.message || "Internal Server Error"
    })
  }
})

const PORT = process.env.PORT || 4600;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
