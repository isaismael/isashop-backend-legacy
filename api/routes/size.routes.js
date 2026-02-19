const express = require('express');
const SizeController = require('../controllers/size.controller');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createsize', authenticateToken, authorizePermissions('product.create'), SizeController.createSize);
// -> sin paginacion
router.get('/getsizes', authenticateToken, authorizePermissions('product.create'), SizeController.getAllSizes);
// -> con paginacion
router.get('/getsizes/pagination/:page/:limit', authenticateToken, authorizePermissions('product.create'), SizeController.getSizes);
router.get('/getsize/:id', authenticateToken, authorizePermissions('product.create'), SizeController.getSizeById);
router.put('/updatesize/:id', authenticateToken, authorizePermissions('product.create'), SizeController.updateSize);
router.delete('/deletesize/:id', authenticateToken, authorizePermissions('product.create'), SizeController.deleteSize);

module.exports = router;