const ProvinceController = require('../controllers/province.controller');
const express = require('express');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

// getAllProvinces sin paginacion
router.get('/getallprovinces', authenticateToken, authorizeRoles('IT'), ProvinceController.getAllProvinces);
// getProvinces con paginacion
router.get('/getprovinces', authenticateToken, authorizeRoles('IT'), ProvinceController.getProvinces);
// getProvinceById
router.get('/getprovincebyid/', authenticateToken, authorizeRoles('IT'), ProvinceController.getProvinceById);
// createProvince
router.post('/createprovince', authenticateToken, authorizeRoles('IT'), ProvinceController.createProvince);
// updateProvince
router.put(
  '/updateprovince/:id',
  authenticateToken,
  authorizeRoles('IT'),
  ProvinceController.updateProvince
);


// getProvincesPublic ruta publica
router.get('/public/getallprovinces', ProvinceController.getProvincesPublic);

module.exports = router;
