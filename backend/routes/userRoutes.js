// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, updateUserPassword } = require('../controllers/userController');
const { protect } = require('../middleware/auth');

// @route   POST api/users/register
// @desc    Register a new user
// @access  Public
router.post('/register', registerUser);

// @route   POST api/users/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', loginUser);

// @route   GET api/users/:id
// @desc    Get user profile
// @access  Private
router.get('/:id', protect, getUserProfile);

// @route   PUT api/users/:id
// @desc    Update user password
// @access  Private
router.put('/:id', protect, updateUserPassword);

module.exports = router;
