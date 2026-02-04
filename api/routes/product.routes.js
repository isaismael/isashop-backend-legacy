const express = require('express');
const ProductController = require('../controllers/product.controller');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createproduct', authenticateToken, authorizePermissions('product.create'), ProductController.createProduct);
router.get('/getproducts/:page/:limit', authenticateToken, authorizePermissions('product.read'), ProductController.getAllProducts);
router.get('/getproduct/:id', authenticateToken, authorizePermissions('product.read'), ProductController.getProductById);
router.put('/updateproduct/:id', authenticateToken, authorizePermissions('product.update'), ProductController.updateProduct);
router.delete('/deleteproduct/:id', authenticateToken, authorizePermissions('product.delete'), ProductController.deleteProduct);

module.exports = router;