const OrderController = require('../controllers/order.controller');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');
const express = require('express');

const router = express.Router();

router.post('/createorder', authenticateToken, authorizeRoles('IT'), OrderController.createOrder);
// -> sin paginacion
router.get('/getallorders', authenticateToken, authorizeRoles('IT'), OrderController.getAllOrders);
// -> con paginacion
router.get('/getorders/', authenticateToken, authorizeRoles('IT'), OrderController.getOrders);
router.get('/orderbyid/:id', authenticateToken, authorizeRoles('IT'), OrderController.getOrderById);
router.put('/updateorder/:id', authenticateToken, authorizeRoles('IT'), OrderController.updateOrder);

//-> ruta publica
router.get('/public/getorders/', OrderController.getAllOrders);
// ruta publica porque viene del redirect de MP sin token
router.post('/createorderwithitems', OrderController.createOrderWithItems);

// El cliente ve solo sus propias órdenes
router.get('/my-orders/:customer_id', authenticateToken, OrderController.getOrdersByCustomer);

module.exports = router;