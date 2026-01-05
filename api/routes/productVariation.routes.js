const express = require('express');
const ProductVariationController = require('../controllers/productVariation.controller');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();


router.post('/createproductvariation', authenticateToken, authorizePermissions('product.create'), ProductVariationController.createProductVariation);
router.get('/getproductvariations', authenticateToken, authorizePermissions('product.create'), ProductVariationController.getAllProductVariations);


module.exports = router;