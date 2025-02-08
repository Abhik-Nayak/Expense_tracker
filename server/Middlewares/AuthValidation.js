import { body, validationResult } from "express-validator";

// Signup Validation Middleware
export const signupValidation = [
  body("name").notEmpty().withMessage("Name is required"), // Ensure name is not empty
  body("email").isEmail().withMessage("Please provide a valid email address"), // Ensure email is valid
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"), // Ensure password is at least 6 characters long

  // Middleware to check for validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Login Validation Middleware
export const loginValidation = [
  body("email").isEmail().withMessage("Please provide a valid email address"), // Ensure email is valid
  body("password").notEmpty().withMessage("Password is required"), // Ensure password is not empty

  // Middleware to check for validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
