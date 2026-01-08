const CategoryController = require('../controllers/category.controller');
const express = require('express');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/getallcategories', authenticateToken, authorizeRoles('it'), CategoryController.getAllCategories);
router.get('/getcategorybyid/:id', authenticateToken, authorizeRoles('it'), CategoryController.getCategoryById);
router.post('/createcategory', authenticateToken, authorizeRoles('it'), CategoryController.createCategory);
router.put('/updatecategory/:id', authenticateToken, authorizeRoles('it'), CategoryController.updateCategory);
router.delete('/deletecategory/:id', authenticateToken, authorizeRoles('it'), CategoryController.deleteCategory);

module.exports = router;