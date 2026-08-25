import { registerUser } from "../services/authService.js";

// ? Register a new user
export const register = async (req, res) => {
  try {
    // * Try to register the user
    const registerDto = createRegisterUserDto(req.body);
    const user = await registerUser(registerDto);

    // * Get success response
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    // * Print the error on terminal
    consol.error("Registration Failed! ", error);

    // * Get error response
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
