import bcrypt from "bcryptjs";
import User from "../../models/user.js";
import { createUserResponseDto } from "../dtos/userResponseDto.js";
import { generateToken } from "../../utils/jwt.js";

// ? Register a new user
export const registerUser = async ({ name, email, password, role }) => {
  // * Handle already registered user
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User with given email is already registered");
  }

  // * Perform password hashing for security reasons
  const passwordHash = await bcrypt.hash(password, 12);

  // * Create User model
  const user = await User.create({
    name,
    email,
    passwordHash,
    role,
  });

  return createUserResponseDto(user);
};

// ? Login an existing user
export const loginUser = async ({ email, password }) => {
  // * Fetch user by email
  const user = await User.findOne({ email });

  // * Check whether the email exists
  if (!user) {
    throw new Error("User is not registered with this email");
  }

  // * Check user password
  if (!bcrypt.compare(password, user.passwordHash)) {
    throw new Error("Invalid password");
  }

  // * Generate JWT
  const jwt = generateToken(user);

  // * Get user
  return {
    token: jwt,
    user: createUserResponseDto(user),
  };
};
