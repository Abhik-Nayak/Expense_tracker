import { body, validationResult } from "express-validator";
import jwt from 'jsonwebtoken';

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

export const protect = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];  // Extract the token
  
    if (!token) {
      return res.status(401).json({ message: 'No token provided, authorization denied' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
      req.user = decoded; // Attach user info to request
      next(); // Continue to the next middleware or route handler
    } catch (error) {
      console.log(error)
      res.status(401).json({ message: 'Invalid token' });
    }
  };
