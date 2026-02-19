const ProductImageController = require('../controllers/productImage.controller');
const express = require('express');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'api/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

router.post('/createproductImage', authenticateToken, authorizePermissions('product.create'), upload.single('image'), ProductImageController.createProductImage);
router.get('/getproductImages', authenticateToken, authorizePermissions('product.create'), ProductImageController.getAllProductImages);
router.get('/getproductImage/:id', authenticateToken, authorizePermissions('product.create'), ProductImageController.getProductImageById);
router.put('/updateproductimage/:id', authenticateToken, authorizePermissions('product.create'), ProductImageController.updateProductImage);
router.delete('/deleteproductimage/:id', authenticateToken, authorizePermissions('product.create'), ProductImageController.deleteProductImage);

module.exports = router;