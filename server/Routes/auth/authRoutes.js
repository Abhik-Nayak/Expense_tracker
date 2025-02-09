import express from 'express';
import bcrypt from 'bcryptjs';  // For password comparison
import jwt from 'jsonwebtoken';  // For generating JWT token
import User from '../../Models/User.js';  // Import the User model
import { login, signup } from '../../Controllers/AuthController.js';
import { loginValidation, signupValidation } from '../../Middlewares/AuthValidation.js';

const router = express.Router();

// Signup route
router.post('/signup',signupValidation, signup);
  
// Login route
router.post('/login',loginValidation ,login);

export default router;
