import User from "../../models/user.js";

// ? Get all users
export const getAllUsers = async ({ role, pageNumber, pageSize }) => {
  var users = await User.find({ role });
};
