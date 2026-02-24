const ShippingAddresController = require('../controllers/shippingAddres.controller');
const express = require('express');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createshippingadress', authenticateToken, ShippingAddresController.createShippingAdress);
router.get('/getshippingaddresbyid/:id', authenticateToken, authorizeRoles('IT'), ShippingAddresController.getShippingAdressById);
router.get('/getshippingadresses/', authenticateToken, authorizeRoles('IT'), ShippingAddresController.getShippingAdresses);
// getShippingAdresses
router.get('/getallshippingaddres', authenticateToken, authorizeRoles('IT'), ShippingAddresController.getAllShippingAdresses);
router.put('/updateshippingaddres/:id', authenticateToken, authorizeRoles('IT'), ShippingAddresController.updateShippingAdress);

module.exports = router;