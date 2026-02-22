const WarehouseController = require('../controllers/warehouse.controller');
const express = require('express');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createwarehouse', authenticateToken, authorizeRoles('IT'), WarehouseController.createWarehouse);
// -> sin paginacion
router.get('/getallwarehouses', authenticateToken, authorizeRoles('IT'), WarehouseController.getAllWarehouses);
// -> con paginacion
router.get('/getwarehouses', authenticateToken, authorizeRoles('IT'), WarehouseController.getWarehouses)
router.get('/getwarehousebyid/', authenticateToken, authorizeRoles('IT'), WarehouseController.getWarehouseById);
router.put('/updatewarehouse/', authenticateToken, authorizeRoles('IT'), WarehouseController.updateWarehouse);
router.delete('/deletewarehouse/:id', authenticateToken, authorizeRoles('IT'), WarehouseController.deleteWarehouse);

module.exports = router;