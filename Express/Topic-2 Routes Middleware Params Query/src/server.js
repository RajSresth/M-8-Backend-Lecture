import express from "express";
import productRoutes from "./routes/product.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/v1/product", productRoutes);

// http://localhost:3000   + /api/v1/product   + /create-product
// http://localhost:3000/api/v1/product/get-all-products
// http://localhost:3000/api/v1/product/get-single-product/1
// http://localhost:3000/api/v1/product/update-product/1
// http://localhost:3000/api/v1/product/delete-product/5

const PORT = process.env.PORT || 4600;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
