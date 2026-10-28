import validator from "validator";

const validate = (req, res, next) => {
  const { fullname, email, password } = req.body;
  const errors = [];

  if (
    typeof fullname !== "string" ||
    !validator.isLength(fullname, { min: 3, max: 20 })
  ) {
    errors.push("Fullname must be 3-20 characters");
  }

  if (typeof email !== "string" || !validator.isEmail(email)) {
    errors.push("Please provide a valid email");
  }

  if (
    typeof password !== "string" ||
    !validator.isStrongPassword(password, {
      minLength: 8,
      maxLength: 20,
      minNumbers: 1,
      minUppercase: 1,
      minLowercase: 1,
      minSymbols: 1,
    })
  ) {
    errors.push("Password must be 8-20 characters");
  }

  if (errors.length > 0) {
    const err = new Error("Validation Failed");
    err.status = 400;
    err.details = errors;
    return next(err);
  }

  req.validateUser = {
    fullname: fullname.trim(),
    email: email.toLowerCase(),
    password: password.trim(),
  };

  next(); // here i want to pass control to the controller
};

export default validate;
