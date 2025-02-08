import Expense from '../Models/Expense.js';
import User from '../Models/User.js';

// Add expense
export const addExpense = async (req, res) => {
  const { amount, category, description } = req.body;
  const userId = req.user.id; // Get user id from JWT

  try {
    const expense = new Expense({
      amount,
      category,
      description,
      user: userId,
    });

    await expense.save();
    res.status(201).json({ message: 'Expense added successfully', expense });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all expenses for the logged-in user
export const getExpenses = async (req, res) => {
  const userId = req.user.id; // Get user id from JWT

  try {
    const expenses = await Expense.find({ user: userId }).sort({ date: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update expense
export const updateExpense = async (req, res) => {
  const { id } = req.params; // Expense ID
  const { amount, category, description } = req.body;
  const userId = req.user.id; // Get user id from JWT

  try {
    const expense = await Expense.findOne({ _id: id, user: userId });
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    expense.amount = amount || expense.amount;
    expense.category = category || expense.category;
    expense.description = description || expense.description;

    await expense.save();
    res.status(200).json({ message: 'Expense updated successfully', expense });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete expense
export const deleteExpense = async (req, res) => {
  const { id } = req.params; // Expense ID
  const userId = req.user.id; // Get user id from JWT

  try {
    const expense = await Expense.findOneAndDelete({ _id: id, user: userId });
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
