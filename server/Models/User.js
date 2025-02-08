import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // This field is required
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures no two users have the same email
      match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, // Basic email validation
    },
    password: {
      type: String,
      required: true, // This field is required
      minlength: 6, // Minimum length of password
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Hash the password before saving it to the database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Create the User model based on the schema
const UserModel = mongoose.model("User", userSchema);

export default UserModel;
