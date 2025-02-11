// server.js
import "dotenv/config";
import express, { json } from "express";
import authDb from "./config/db.js";
import userRoutes from "./routes/userRoute.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import rateLimit from "express-rate-limit";

import path from "path";

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message:
    "Too many authentication requests from this IP, please try again after 15 minutes",
});
const app = express();

app.use(json());
app.use("/users", authLimiter, userRoutes);

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
  );
});
