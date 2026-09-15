import { UserRole } from "../../constants/userRole.js";

export const registerUserValidator = (body) => {
  const errors = {};

  // * Perform validations
  if (!body.name || body.name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters long.";
  }

  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.email = "A valid email address is required.";
  }

  if (!body.password || body.password.length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  if (!body.role || !Object.values(UserRole).includes(body.role)) {
    errors.role = "Role must be 1-Admin, 2-Staff, or 3-Student";
  }

  if (Object.keys(errors).length > 0) {
    return {
      error: errors,
      value: null,
    };
  }

  return {
    error: null,
    value: {
      name: body.name.trim(),
      email: body.email.trim(),
      password: body.password,
      role: body.role,
    },
  };
};
