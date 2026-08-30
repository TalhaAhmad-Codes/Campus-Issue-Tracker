import { UserRole } from "../../constants/userRole";

export const validateRegisterUserDto = (dto) => {
  const errors = {};

  if (!dto.name || dto.name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters long.";
  }

  if (!dto.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dto.email)) {
    errors.email = "A valid email address is required.";
  }

  if (!dto.password || dto.password.length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  if (!dto.role || !Object.values(UserRole).includes(dto.role)) {
    errors.role = "Role must be 1-Admin, 2-Staff, or 3-Student";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
