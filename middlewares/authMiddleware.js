const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddlewware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded", decoded);
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error(
        "token verification and its expired , please login again"
      );
    }
  } else {
    throw new Error("No authorization header");
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await User.findOne({ email });
  if (adminUser.role != "admin") {
    throw new Error("You are not admin");
  } else {
    next();
  }
});

module.exports = { authMiddlewware, isAdmin };
