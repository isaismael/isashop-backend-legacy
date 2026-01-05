const express = require('express');
const ProductController = require('../controllers/product.controller');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/getproducts', authenticateToken, authorizeRoles('it'), ProductController.getAllProducts);
router.post('/createproduct', authenticateToken, authorizeRoles('it'), ProductController.createProduct);


module.exports = router;