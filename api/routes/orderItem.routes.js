const OrderController = require('../controllers/order.controller');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');
const express = require('express');

const router = express.Router();

router.post('/createorder', authenticateToken, authorizeRoles('IT'), OrderController.createOrder);
// -> sin paginacion
router.get('/getallorders', authenticateToken, authorizeRoles('IT'), OrderController.getAllOrders);
// -> con paginacion
router.get('/getorders', authenticateToken, authorizeRoles('IT'), OrderController.getOrders);
// by id
router.get('/orderitembyid/:id', authenticateToken, authorizeRoles('IT'), OrderController.getOrderById);
// -> update
router.put('/updateorderitem/:id', authenticateToken, authorizeRoles('IT'), OrderController.updateOrder);

//-> ruta publica
router.get('/public/getorders/', OrderController.getAllOrders);

module.exports = router;