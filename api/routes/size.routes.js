const express = require('express');
const SizeController = require('../controllers/size.controller');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createsize', authenticateToken, authorizePermissions('product.create'), SizeController.createSize);
router.get('/getsizes', authenticateToken, authorizePermissions('product.create'), SizeController.getAllSizes);
router.get('/getsize/:id', authenticateToken, authorizeRoles('it'), SizeController.getSizeById);
router.put('/updatesize/:id', authenticateToken, authorizeRoles('it'), SizeController.updateSize);
router.delete('/deletesize/:id', authenticateToken, authorizeRoles('it'), SizeController.deleteSize);

module.exports = router;