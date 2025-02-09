import express from 'express';
import { addExpense, getExpenses, updateExpense, deleteExpense } from '../../Controllers/ExpenseController.js';
import { protect } from '../../Middlewares/AuthValidation.js'; // Protect middleware

const router = express.Router();

// Add an expense
router.post('/expenses', protect, addExpense);

// Get all expenses
router.get('/expenses', protect, getExpenses);

// Update an expense
router.put('/expenses/:id', protect, updateExpense);

// Delete an expense
router.delete('/expenses/:id', protect, deleteExpense);

export default router;
