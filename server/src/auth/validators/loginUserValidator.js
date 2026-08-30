export const validateLoginUserDto = (dto) => {
  const errors = {};

  if (!dto.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dto.email)) {
    errors.email = "A valid email address is required.";
  }

  if (!dto.password || dto.password.length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
