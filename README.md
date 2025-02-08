# Expense Tracker App (MERN Stack)

Welcome to the **Expense Tracker App** built with the **MERN stack (MongoDB, Express, React, Node.js)**. This app allows users to securely register, log in, and track their expenses.

---

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation Guide](#installation-guide)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contribution](#contribution)
- [License](#license)

---

## Overview

The **Expense Tracker App** allows users to:

- Register an account.
- Log in using JWT authentication.
- Add, view, update, and delete their expenses.
- Track spending by category and time.

### Key Features:
- **User Authentication**: Signup, login, and JWT token-based authentication.
- **Expense Management**: Add, update, view, and delete expenses.
- **Secure**: All endpoints are protected using JWT for authentication.
- **Responsive**: User-friendly frontend with React.

---

## Technologies Used

### Backend (Server-side):
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building the server.
- **MongoDB**: NoSQL database to store user and expense data.
- **Mongoose**: ODM (Object Data Modeling) library to interact with MongoDB.
- **JWT (JSON Web Tokens)**: For authentication and authorization.
- **Bcrypt.js**: For hashing and comparing passwords securely.
- **Cors**: For handling Cross-Origin Resource Sharing.

### Frontend (Client-side):
- **React**: JavaScript library for building user interfaces.
- **React Router**: For navigation and routing.
- **Axios**: To make HTTP requests to the backend API.
- **Material UI**: React components to style the application (optional but recommended).

### Tools:
- **Postman**: For testing API endpoints.
- **Git**: For version control.

---

## Features

- **User Authentication**: 
  - Users can sign up, log in, and authenticate using JWT tokens.
  - JWT stored in local storage for session management.
  
- **Expense Management**:
  - Add new expenses with details (amount, category, description, date).
  - View a list of all expenses.
  - Edit and update expense details.
  - Delete an expense.

- **Data Validation**:
  - Validations in both backend (Express) and frontend (React) to ensure data integrity and security.

---

## Installation Guide

### Prerequisites:

- **Node.js** and **npm** installed on your system.
- **MongoDB**: Either a local MongoDB instance or a cloud MongoDB database (e.g., MongoDB Atlas).

---

## Backend Setup

1. Clone the repository:
    ```bash
    git clone <repo_url>
    ```

2. Navigate to the backend folder:
    ```bash
    cd server
    ```

3. Install required packages:
    ```bash
    npm install
    ```

4. Create a `.env` file in the `server` directory to store sensitive information:
    ```env
    JWT_SECRET=your_jwt_secret_key
    MONGO_URI=mongodb://your_mongo_database_url
    PORT=8080
    ```

5. Run the backend server:
    ```bash
    npm run dev
    ```

The backend server will now be running on `http://localhost:8080`.

---

## Frontend Setup

1. Navigate to the `client` folder:
    ```bash
    cd client
    ```

2. Install required packages:
    ```bash
    npm install
    ```

3. Run the React app:
    ```bash
    npm start
    ```

The frontend will now be running on `http://localhost:3000`.

---

## API Endpoints

### **Authentication:**

#### 1. **POST /api/auth/signup**
   - **Description**: Register a new user.
   - **Request Body**:
     ```json
     {
       "name": "John Doe",
       "email": "john@example.com",
       "password": "password123"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "User registered successfully",
       "token": "JWT_TOKEN",
       "user": { "id": "user_id", "name": "John Doe", "email": "john@example.com" }
     }
     ```

#### 2. **POST /api/auth/login**
   - **Description**: Log in a user and get a JWT token.
   - **Request Body**:
     ```json
     {
       "email": "john@example.com",
       "password": "password123"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Login successful",
       "token": "JWT_TOKEN",
       "user": { "id": "user_id", "name": "John Doe", "email": "john@example.com" }
     }
     ```

---

### **Expense Routes** (Protected with JWT):

#### 1. **POST /api/expenses**
   - **Description**: Add a new expense.
   - **Request Body**:
     ```json
     {
       "amount": 45.75,
       "category": "Food",
       "description": "Dinner at a restaurant"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Expense added successfully",
       "expense": { ... }
     }
     ```

#### 2. **GET /api/expenses**
   - **Description**: Get all expenses for the authenticated user.
   - **Response**:
     ```json
     [
       {
         "_id": "expense_id",
         "amount": 45.75,
         "category": "Food",
         "description": "Dinner at a restaurant",
         "user": "user_id",
         "createdAt": "timestamp",
         "updatedAt": "timestamp"
       }
     ]
     ```

#### 3. **PUT /api/expenses/:id**
   - **Description**: Update an existing expense.
   - **Request Body**:
     ```json
     {
       "amount": 50.00,
       "category": "Food",
       "description": "Lunch at a cafe"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Expense updated successfully",
       "expense": { ... }
     }
     ```

#### 4. **DELETE /api/expenses/:id**
   - **Description**: Delete an expense.
   - **Response**:
     ```json
     {
       "message": "Expense deleted successfully"
     }
     ```

---

## Testing

### Backend Testing:
You can use **Postman** or **Insomnia** to test the API endpoints:

1. Test signup by sending a POST request to `/api/auth/signup`.
2. Test login by sending a POST request to `/api/auth/login` and receive a JWT token.
3. Test the expense routes by sending POST, GET, PUT, DELETE requests to `/api/expenses`.

### Frontend Testing:
Once the backend is up and running, you can test the frontend by navigating to `http://localhost:3000` and interacting with the user interface.

---

## Contribution

We welcome contributions to improve the Expense Tracker App! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### **Conclusion:**

This **MERN Stack Expense Tracker App** is a full-fledged application that allows users to track their expenses. With **authentication** using **JWT**, users can **add, view, update,** and **delete** their expenses. The **React frontend** provides a smooth user interface while the **Express backend** handles the logic and data management securely.

If you encounter any issues, feel free to create an issue or contribute!
