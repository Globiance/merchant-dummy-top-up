// routes/walletRoutes.js
const express = require('express');
const router = express.Router();
const walletController = require('../controller/wallet.controller');
const authenticateToken = require('../middleware/authentication'); 

router.get('/balance', authenticateToken, walletController.readBalance);
// router.put('/balance', authenticateToken, walletController.updateBalance);

module.exports = router;
