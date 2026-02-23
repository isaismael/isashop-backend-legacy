const ShippingCostController = require('../controllers/shippingCost.controller');
const express = require('express');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

// createShippingCost
router.post('/createshippingcost', authenticateToken, authorizeRoles('IT'), ShippingCostController.createShippingCost);
// getAllShippingCosts sin paginacion
router.get('/getallshippingcost', authenticateToken, authorizeRoles('IT'), ShippingCostController.getAllShippingCosts);
// getShippingCosts con paginacion
router.get('/getshippingcost', authenticateToken, authorizeRoles('IT'), ShippingCostController.getShippingCosts);
// getShippingCostById
router.get('/shippingcostbyid/:id', authenticateToken, authorizeRoles('IT'), ShippingCostController.getShippingCostById);
// updateShippingCost
router.put('/updateshippingcost/:id', authenticateToken, authorizeRoles('IT'), ShippingCostController.updateShippingCost);

// rutas publicas
// getShippingCostsPublic
router.get('/public/getallshippingcost', ShippingCostController.getShippingCostsPublic);

module.exports = router;