import mongoose from "mongoose";

// schema
const productSchema = mongoose.Schema(
  {
    itemName: {
      type: String,
      required: [true, "Item name is required"],
      unique: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
  },
  { timestamps: true },
);

// model
const Product = new mongoose.model("Product", productSchema);
export default Product;
