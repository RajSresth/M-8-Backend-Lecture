import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/product.controller.js";
import { checkAdmin } from "../middleware/checkAdmin.js";

const productRouter = express.Router();

// Create Product
productRouter.post("/create-product", checkAdmin, createProduct);

// Get All products Route
productRouter.get("/get-all-products", getAllProducts);

// Get Single Product Route
productRouter.get("/get-single-product/:productId", getSingleProduct);

// Update Only Field - PATCH
productRouter.patch("/update-product/:productId",checkAdmin, updateProduct);

// Delete Product
productRouter.delete("/delete-product/:productId", checkAdmin,deleteProduct);

export default productRouter;
