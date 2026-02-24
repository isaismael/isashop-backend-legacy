const OrderItemController = require('../controllers/orderItem.controller');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');
const express = require('express');

const router = express.Router();

router.post('/createorder', authenticateToken, authorizeRoles('IT'), OrderItemController.createOrderItem);
// -> sin paginacion
router.get('/getallorders', authenticateToken, authorizeRoles('IT'), OrderItemController.getAllOrderItems);
// -> con paginacion
router.get('/getorders', authenticateToken, authorizeRoles('IT'), OrderItemController.getOrderItems);
// by id
router.get('/orderitembyid/:id', authenticateToken, authorizeRoles('IT'), OrderItemController.getOrderItemById);
// -> update
router.put('/updateorderitem/:id', authenticateToken, authorizeRoles('IT'), OrderItemController.updateOrderItem);

//-> ruta publica
router.get('/public/createorderitem', OrderItemController.createOrderItem);

module.exports = router;