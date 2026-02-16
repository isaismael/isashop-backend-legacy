const CategoryController = require('../controllers/category.controller');
const express = require('express');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createcategory', authenticateToken, authorizeRoles('IT'), CategoryController.createCategory);
router.get('/getallcategories', authenticateToken, authorizeRoles('IT'), CategoryController.getAllCategories);
router.get('/getcategory/:id', authenticateToken, authorizeRoles('IT'), CategoryController.getCategoryById);
router.put('/updatecategory/:id', authenticateToken, authorizeRoles('IT'), CategoryController.updateCategory);
router.delete('/deletecategory/:id', authenticateToken, authorizeRoles('IT'), CategoryController.deleteCategory);

module.exports = router;