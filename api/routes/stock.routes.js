const StockController = require('../controllers/stock.controller');
const express = require('express');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createstock', authenticateToken, authorizeRoles('it'), StockController.createStock);
router.get('/getstocks', authenticateToken, authorizeRoles('it'), StockController.getAllStocks);
router.get('/getstock/:id', authenticateToken, authorizeRoles('it'), StockController.getStockById);
router.get('/updatestock/:id', authenticateToken, authorizeRoles('it'), StockController.updateStock);
router.delete('/deletestock/:id', authenticateToken, authorizeRoles('it'), StockController.deleteStock);

module.exports = router;