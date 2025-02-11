// server.js
import "dotenv/config";
import express, { json } from "express";
import authDb from "./config/db.js"; // Ensure the correct file extension if using ES modules
import userRoutes from "./routes/userRoute.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import path from "path";

const app = express();

// Middleware to parse JSON bodies
app.use(json());
app.use("/users", userRoutes);

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
  );
});
