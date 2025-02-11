import { Router } from "express";
import {
  registerUser,
  authUser,
  allUsers,
  fetchUser,
  updateToken,
  logoutUser,
} from "../controllers/userController.js";
// import authGaurd from "../middleware/authMiddleware";

const router = Router();

router.post("/signup", registerUser);
router.post("/login", authUser);
// router.route("/all").get(authGaurd, allUsers);
// router.route("/:userId").get(authGaurd, fetchUser);
// router.route("/token").post(updateToken);
// router.route("/logout").post(authGaurd, logoutUser);

export default router;
