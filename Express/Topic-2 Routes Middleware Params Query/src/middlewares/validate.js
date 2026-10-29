import validator from "validator";

const validate = (req, res, next) => {
  const { fullname, email, password, role } = req.body;
  const validRoles = ["admin", "user"];
  const errors = [];

  if (
    typeof fullname !== "string" ||
    !validator.isLength(fullname.trim(), { min: 3, max: 20 })
  ) {
    errors.push({
      field: "fullname",
      message: "Fullname must be 3-20 characters",
    });
  }

  if (typeof email !== "string" || !validator.isEmail(email)) {
    errors.push({
      field: "email",
      message: "Please provide a valid email",
    });
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
    errors.push({
      field: "password",
      message:
        "Password must be 8-20 characters with uppercase, lowercase, number and symbol",
    });
  }

  if (
    typeof role !== "string" ||
    !validRoles.includes(role.trim().toLowerCase())
  ) {
    errors.push({
      field: "role",
      message: "Please provide a valid role",
    });
  }

  if (errors.length > 0) {
    const err = new Error("Validation Failed");
    err.status = 400;
    err.details = errors;
    return next(err);
  }

  req.validUser = {
    fullname: fullname.trim(),
    email: email.trim().toLowerCase(),
    password: password.trim(),
    role: role.toLowerCase().trim(),
  };

  next();
};

export default validate;
