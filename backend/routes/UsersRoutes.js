const express = require("express");
const {authController, getUserProfile, registerUser} = require("../controllers/UsersController")
const{protect} = require("../middlewares/authMiddleware")

const router = express.Router();

// user registration

// post email and password auth
router.post('/login', authController);

// get user profile
router.route('/profile').get(protect, getUserProfile);

module.exports = router;
