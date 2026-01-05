const express = require('express');
const SizeController = require('../controllers/size.controller');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/getsizes', authenticateToken, authorizePermissions('product.create'), SizeController.getAllSizes);
router.post('/createsize', authenticateToken, authorizePermissions('product.create'), SizeController.createSize);

module.exports = router;