// routes/transactionRoutes.js
const express = require('express');
const router = express.Router();
const transactionController = require('../controller/transaction.controller');
const authenticateToken = require('../middleware/authentication'); 

router.get('/', authenticateToken, transactionController.getTransactions);

module.exports = router;
