const CategoryController = require('../controllers/category.controller');
const express = require('express');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createcategory', authenticateToken, authorizeRoles('it'), CategoryController.createCategory);


module.exports = router;