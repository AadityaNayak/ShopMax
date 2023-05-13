const User = require("../models/UserModel");
const asyncHandler = require("express-async-handler");

const authController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await User.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  }
  else{
    res.status(404);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = authController;
