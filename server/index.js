import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Models/db.js"; // Import the connectDB function from db.js
import authRoutes from "./Routes/AuthRouts.js";
import expenseRoutes from "./Routes/ExpenseRoute.js";

const app = express();
// Load environment variables from .env file
dotenv.config();

// Get the PORT from environment variables
const PORT = process.env.PORT || 8080;

// Connect to MongoDB using the connectDB function
connectDB();

// Middleware for parsing JSON and handling CORS
app.use(express.json()); // Using express.json() instead of bodyParser.json()
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/note', expenseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
