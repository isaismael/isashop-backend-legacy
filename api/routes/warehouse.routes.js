const WarehouseController = require('../controllers/warehouse.controller');
const express = require('express');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createwarehouse', authenticateToken, authorizeRoles('it'), WarehouseController.createWarehouse);
router.get('/getwarehouses', authenticateToken, authorizeRoles('it'), WarehouseController.getAllWarehouses);

module.exports = router;