const WarehouseController = require('../controllers/warehouse.controller');
const express = require('express');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createwarehouse', authenticateToken, authorizeRoles('it'), WarehouseController.createWarehouse);
router.get('/getwarehouses', authenticateToken, authorizeRoles('it'), WarehouseController.getAllWarehouses);
router.get('/getwarehouse/:id', authenticateToken, authorizeRoles('it'), WarehouseController.getWarehouseById);
router.put('/updatewarehouse/:id', authenticateToken, authorizeRoles('it'), WarehouseController.updateWarehouse);
router.delete('/deletewarehouse/:id', authenticateToken, authorizeRoles('it'), WarehouseController.deleteWarehouse);

module.exports = router;