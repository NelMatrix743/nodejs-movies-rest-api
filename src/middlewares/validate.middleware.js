// DATA VALIDATION MIDDILEWARE

export const validate = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false, // return all errors
  });

  if (error) {
    const errors = error.details.map((err) => err.message);

    return res.status(400).json({
      message: "Validation error",
      errors,
    });
  }

  req.body = value; // sanitized data
  next();
};



// EOSC