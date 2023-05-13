

const express = require("express");
const {authController, getUserProfile} = require("../controllers/UsersController")
const{protect} = require("../middlewares/authMiddleware")

const router = express.Router();

// post email and password auth
router.post('/login', authController);

// get user profile
router.route('/profile').get(protect, getUserProfile);

module.exports = router;
