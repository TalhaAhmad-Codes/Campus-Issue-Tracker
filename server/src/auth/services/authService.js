import bcrypt from "bcryptjs";
import User from "../../models/user.js";
import { createUserResponseDto } from "../dtos/userResponseDto.js";

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
