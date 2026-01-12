const express = require('express');
const ProductController = require('../controllers/product.controller');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createproduct', authenticateToken, authorizeRoles('it'), ProductController.createProduct);
router.get('/getproducts', authenticateToken, authorizeRoles('it'), ProductController.getAllProducts);
router.get('/getproduct/:id', authenticateToken, authorizeRoles('it'), ProductController.getProductById);
router.put('/updateproduct/:id', authenticateToken, authorizeRoles('it'), ProductController.updateProduct);
router.delete('/deleteproduct/:id', authenticateToken, authorizeRoles('it'), ProductController.deleteProduct);

module.exports = router;