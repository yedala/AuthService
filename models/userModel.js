import { Schema, model } from "mongoose";
import pkg from "bcryptjs";
const { genSalt, hash, compare } = pkg;

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      required: false,
      default:
        "https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png",
    },
    isAdmin: {
      type: Boolean,
      required: false,
      default: false,
    },
    mobileNumber: {
      type: Number,
      required: false,
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await genSalt(10);
  this.password = await hash(this.password, salt);
});
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await compare(enteredPassword, this.password);
};

const User = model("User", userSchema);

export default User;
