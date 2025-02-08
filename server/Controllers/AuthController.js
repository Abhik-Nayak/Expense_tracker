import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../Models/User.js"; // Import the User model

// Signup controller
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Step 1: Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Step 2: Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Step 3: Create a new user with the hashed password
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Step 4: Save the new user to the database
    await newUser.save();

    // Step 5: Generate a JWT token (optional)
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    // Step 6: Return the response with user data and the token
    res.status(201).json({
      message: "User registered successfully",
      token, // Send the generated JWT token
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// login Controller
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Step 1: Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Step 2: Compare the provided password with the hashed password
    const isPasswordMatch = await user.matchPassword(password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Step 3: Generate a JWT token (Optional but recommended)
    const token = jwt.sign(
      { id: user._id, email: user.email }, // Payload
      process.env.JWT_SECRET, // Secret key (should be stored in .env)
      { expiresIn: "1h" } // Token expiration time
    );

    // Step 4: Send the response with the token and user data (do not send password)
    res.json({
      message: "Login successful",
      token, // Send the generated JWT token
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
