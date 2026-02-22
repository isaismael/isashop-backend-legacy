const StockController = require('../controllers/stock.controller');
const express = require('express');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createstock', authenticateToken, authorizeRoles('IT'), StockController.createStock);
// -> sin paginacion
router.get('/getallstocks', authenticateToken, authorizeRoles('IT'), StockController.getAllStocks);
// -> con paginacion
router.get('/getstocks', authenticateToken, authorizeRoles('IT'), StockController.getStocks)
router.get('/getstockbyid/:id', authenticateToken, authorizeRoles('IT'), StockController.getStockById);
router.put('/updatestock/:id', authenticateToken, authorizeRoles('IT'), StockController.updateStock);
router.delete('/deletestock/:id', authenticateToken, authorizeRoles('IT'), StockController.deleteStock);

module.exports = router;