const express = require('express');
const SubcategoryController = require('../controllers/subcategory.controller');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createsubcategory', authenticateToken, authorizeRoles('IT'), SubcategoryController.createSubCategory);
router.get('/getsubcategories', authenticateToken, authorizeRoles('IT'), SubcategoryController.getAllSubCategories);

module.exports = router;