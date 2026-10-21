import productsArr from "../constants/products.js";

// Create Product
export const createProduct = (req, res) => {
  const data = req.body;
  console.log(data);

  if (!data) {
    return res.status(400).json({
      success: false,
      message: "Data not found",
    });
  }

  if (Array.isArray(data)) {
    productsArr.push(...data);

    return res.status(201).json({
      success: true,
      message: "Product Created",
      data: productsArr,
    });
  }

  productsArr.push(data);

  return res.status(201).json({
    success: true,
    message: "Product Created",
    data: productsArr,
  });
};

// Get All products Route
export const getAllProducts = (req, res) => {
  res.status(200).json(productsArr);
};

// Get Single Product Route
export const getSingleProduct = (req, res) => {
  const { productId } = req.params;

  const product = productsArr.find(
    (element) => element.id === Number(productId),
  );

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
