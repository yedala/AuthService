// db.js
// import { createConnection } from "mongoose";
import mongoose from "mongoose";

const connectionUri = process.env.MONGO_URI;
const options = {
  dbName: "auth",
};

const authDb = mongoose
  .connect(connectionUri, options)
  .then(() => {
    console.log('Connected to the "auth" database using mongoose.connect');
  })
  .catch((err) => {
    console.error("Error connecting with mongoose.connect:", err);
  });

export default authDb;
