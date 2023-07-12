const express = require("express");

const {
  createUser,
  loginUser,
  getallUser,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unBlockUser,
} = require("../controller/userController.js");
const {
  authMiddlewware,
  isAdmin,
} = require("../middlewares/authMiddleware.js");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/get-all-user", getallUser);
router.get("/:id", authMiddlewware, isAdmin, getUser);
router.delete("/:id", deleteUser);
// router.put("/:id", authMiddlewware, updateUser);
router.put("/update-user", authMiddlewware, updateUser);
router.put("/block-user/:id", authMiddlewware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddlewware, isAdmin, unBlockUser);

module.exports = router;
