import Product from "../models/productModel.js";

// Create Product
export const createProduct = async (req, res, next) => {
  try {
    const { itemName, price } = req.body;
    console.log("itemName:", itemName);
    console.log("price:", price);

    if (!itemName && itemName.length > 4) {
      return res.status(400).json({
        success: false,
        message: "Item must be a character of 5 length",
      });
    }

    if (!price) {
      return res.status(400).json({
        success: false,
        message: "Price must be a number not 0",
      });
    }

    const product = await Product.create({
      itemName,
      price,
    });

    return res.status(201).json({
      success: true,
      message: "Product Created",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// Get All products Route
export const getAllProducts = async (req, res) => {
  const products = await Product.find({});

  res.status(200).json({
    success: true,
    message: "All Product",
    products,
  });
};

// Get Single Product Route
export const getSingleProduct = async (req, res) => {
  const { productId } = req.params;

  const product = await Product.find({ _id: productId });

  if (!product) {
    return res.status(400).json({
      success: false,
      message: "Product Not Found",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Product Found",
    data: product,
  });
};

// Update Only Field - PATCH
export const updateProduct = (req, res) => {
  const { productId } = req.params;
  const newProductData = req.body;

  const existingProductIndex = productsArr.findIndex(
    (element) => element.id === Number(productId),
  );

  console.log("existingProductIndex:", existingProductIndex);

  if (existingProductIndex < 0) {
    return res.status(400).json({
      success: false,
      message: "Product Not Found",
    });
  }

  console.log(productsArr[existingProductIndex]);

  productsArr[existingProductIndex] = {
    ...productsArr[existingProductIndex],
    ...newProductData,
  };

  res.status(200).json({
    success: true,
    message: "Product Price Updated",
    data: productsArr[existingProductIndex],
  });
};

// Delete Product
export const deleteProduct = (req, res) => {
  const { productId } = req.params;
  const existProductIndex = productsArr.findIndex(
    (element) => element.id === Number(productId),
  );

  if (existProductIndex < 0) {
    return res.status(400).json({
      success: false,
      message: "Product Not Found",
    });
  }

  productsArr.splice(existProductIndex, 1);

  return res.status(200).json({
    success: true,
    message: "Product Deleted",
    data: productsArr,
  });
};
