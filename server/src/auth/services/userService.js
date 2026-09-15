import User from "../../models/user.js";
import { createUserResponseDto } from "../dtos/userResponseDto.js";

// ? Get all users
export const getAllUsers = async ({ role, pageNumber, pageSize }) => {
  var users = await User.find({ role }); // ! Will apply filters later
};

// ? Get user by id
export const getUserById = async ({ id }) => {
  var user = await User.find({ id });

  if (!user) {
    throw new Error("User of given id doesn't exist.");
  }

  return createUserResponseDto(user);
};

// ? Get user by email
export const getUserByEmail = async ({ email }) => {
  var user = await User.find({ email });

  if (!user) {
    throw new Error("User of given email doesn't exist.");
  }

  return createUserResponseDto(user);
};
