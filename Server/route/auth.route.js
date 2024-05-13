const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller');
const authenticateToken = require('../middleware/authentication');

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/logout', authenticateToken, authController.logoutUser);

module.exports = router;
