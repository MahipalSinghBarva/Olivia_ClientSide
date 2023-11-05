const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Interal Server Error";

  //wrong mongodb id err
  if (err.name === "CastError") {
    const message = "Restore not found. Invailed: ${err.path}";
    err = new ErrorHandler(message, 400);
  }

  // mongoose duplicate key err
  if (err.code === 11000) {
    const message = `Duplicate ${object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  //wrong jwt err
  if (err.name === "jsonwebtoken") {
    const message = "Json web token is WRONG, Try again";
    err = new ErrorHandler(message, 400);
  }

  //JWT expire err
  if (err.name === "TokenExpiredError") {
    const message = "Json web token is expired, Try again";
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.stack,
  });
};
