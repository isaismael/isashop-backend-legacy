const express = require('express');
const ColorController = require('../controllers/color.controller');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createcolor', authenticateToken, authorizePermissions('product.create'), ColorController.createColor);
// -> sin paginacion
router.get('/getcolors', authenticateToken, authorizePermissions('product.create'), ColorController.getAllColors);
// -> con paginacion
router.get('/getcolors/paginated/:page/:limit', authenticateToken, authorizePermissions('product.create'), ColorController.getColors);
router.get('/getcolor/:id', authenticateToken, authorizePermissions('product.create'), ColorController.getColorById);
router.put('/updatecolor/:id', authenticateToken, authorizePermissions('product.create'), ColorController.updateColor);
router.delete('/deletecolor/:id', authenticateToken, authorizePermissions('product.create'), ColorController.deleteColor);

module.exports = router;