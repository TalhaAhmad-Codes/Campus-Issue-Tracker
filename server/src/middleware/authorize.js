// ? Perform authorization
export const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    // * If user is not authenticated
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required.",
      });
    }

    // * Block unauthorized access
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to access this resource.",
      });
    }

    next();
  };
};
