const errorMiddleware = (err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message || "Internal Server Error";

  // Mongoose schema validation errors
  if (err.name === "ValidationError") {
    status = 400;
    message = "Product validation failed";
  }

  // Invalid MongoDB ObjectId
  if (err.name === "CastError") {
    status = 400;
    message = "Invalid ID format";
  }

  // Duplicate unique field
  if (err.code === 11000) {
    status = 409;
    message = "Duplicate value already exists";
  }

  return res.status(status).json({
    success: false,
    message: status >= 500 ? "Internal Server Error" : message,
    errors: err.details || [],
  });
};

export default errorMiddleware;
