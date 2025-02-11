import jwt from "jsonwebtoken";

// Usage:

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_TOKEN, {
    expiresIn: "30m",
  });
};

const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_REFRESH, {
    expiresIn: "1d",
  });
};
export { generateToken, generateRefreshToken };
