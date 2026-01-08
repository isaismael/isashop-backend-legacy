const StockController = require('../controllers/stock.controller');
const express = require('express');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/getstocks', authenticateToken, authorizeRoles('it'), StockController.getAllStocks);
router.post('/createstock', authenticateToken, authorizeRoles('it'), StockController.createStock);
//getStockById
router.get('/getstockbyid/:id', authenticateToken, authorizeRoles('it'), StockController.getStockById);

module.exports = router;