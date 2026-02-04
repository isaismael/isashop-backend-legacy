const BrandController = require('../controllers/brand.controller');
const express = require('express');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createbrand', authenticateToken, authorizePermissions('brand.create'), BrandController.createBrand);
router.get('/getbrands', authenticateToken, authorizePermissions('brand.read'), BrandController.getAllBrands);
router.get('/getbrand/:id', authenticateToken, authorizePermissions('brand.read'), BrandController.getBrandById);
router.put('/updatebrand/:id', authenticateToken, authorizePermissions('brand.update'), BrandController.updateBrand);
router.delete('/deletebrand/:id', authenticateToken, authorizePermissions('brand.delete'), BrandController.deleteBrand);


module.exports = router;