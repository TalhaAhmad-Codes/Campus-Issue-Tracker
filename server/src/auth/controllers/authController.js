import { createLoginUserDto } from "../dtos/loginUserDto.js";
import { createRegisterUserDto } from "../dtos/registerUserDto.js";
import { loginUser, registerUser } from "../services/authService.js";

// ? Register a new user
export const register = async (req, res) => {
  try {
    // * Create DTO for registering the user
    // console.log("4. Controller body:", req.body);
    const registerDto = createRegisterUserDto(req.body);

    // * Register the user
    const user = await registerUser(registerDto);

    // * Get success response
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    // * Print the error on terminal
    console.error("Registration Failed! ", error);

    // * Get error response
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// ? Login an existing user
export const login = async (req, res) => {
  try {
    // * Create DTO to login the user
    const loginDto = createLoginUserDto(req.body);

    // * Login the user
    const user = await loginUser(loginDto);

    // * Get success response
    return res.status(201).json({
      success: true,
      message: "User logged in successfully",
      data: user,
    });
  } catch (error) {
    console.error("Login Failed! ", error);

    // * Get failed response
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
