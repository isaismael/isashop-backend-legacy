const express = require('express');
const ProductVariationController = require('../controllers/productVariation.controller');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createproductvariation', authenticateToken, authorizePermissions('product.create'), ProductVariationController.createProductVariation);
router.get('/getproductvariations', authenticateToken, authorizePermissions('product.create'), ProductVariationController.getAllProductVariations);
router.get('/getproductvariation/:id', authenticateToken, authorizeRoles('IT'), ProductVariationController.getProductVariationById);
router.put('/updateproductvaration/:id', authenticateToken, authorizeRoles('IT'), ProductVariationController.updateProductVariation);
router.delete('/deleteproductvaration/:id', authenticateToken, authorizeRoles('IT'), ProductVariationController.deleteProductVariation);

module.exports = router;