const validate = (schema) => {
  return (req, res, next) => {
    // console.log("1. Original body:", req.body);

    const { error, value } = schema(req.body);

    // console.log("2. Validation result:", { error, value });

    if (error) {
      return res.status(422).json({
        success: false,
        message: "Validation failed",
        errors: error,
      });
    }

    req.body = value;

    // console.log("3. Body after validation:", req.body);

    next();
  };
};

export default validate;