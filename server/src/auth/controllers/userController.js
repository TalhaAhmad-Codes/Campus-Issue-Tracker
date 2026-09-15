import { getUserByEmail, getUserById } from "../services/userService.js";

// ? Get user by id
export const userById = async (req, res) => {
  try {
    // * Get user by id
    const user = await getUserById(req.body);

    // * Get success response
    return res.status(201).json({
      success: true,
      message: "User retrieved successfully",
      data: user,
    });
  } catch (error) {
    // * Print the error
    console.error("Retrieval Failed! ", error);

    // * Get failed response
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// ? Get user by email
export const userByEmail = async (req, res) => {
  try {
    // * Get user by email
    const user = await getUserByEmail(req.body);

    // * Get success response
    return res.status(201).json({
      success: true,
      message: "User retrieved successfully",
      data: user,
    });
  } catch (error) {
    // * Print error message
    console.error("Retrieval Failed! ", error);

    // * Get failed response
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
