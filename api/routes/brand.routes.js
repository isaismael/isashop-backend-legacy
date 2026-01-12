const BrandController = require('../controllers/brand.controller');
const express = require('express');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createbrand', authenticateToken, authorizeRoles('it'), BrandController.createBrand);
router.get('/getbrands', authenticateToken, authorizeRoles('it'), BrandController.getAllBrands);
router.get('/getbrand/:id', authenticateToken, authorizeRoles('it'), BrandController.getBrandById);
router.put('/updatebrand/:id', authenticateToken, authorizeRoles('it'), BrandController.updateBrand);
router.delete('/deletebrand/:id', authenticateToken, authorizeRoles('it'), BrandController.deleteBrand);


module.exports = router;