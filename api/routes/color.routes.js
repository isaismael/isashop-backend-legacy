const express = require('express');
const ColorController = require('../controllers/color.controller');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createcolor', authenticateToken, authorizeRoles('it'), ColorController.createColor);
router.get('/getcolors', authenticateToken, authorizeRoles('it'), ColorController.getAllColors);
router.get('/getcolor/:id', authenticateToken, authorizeRoles('it'), ColorController.getColorById);
router.put('/updatecolor/:id', authenticateToken, authorizeRoles('it'), ColorController.updateColor);
router.delete('/deletecolor/:id', authenticateToken, authorizeRoles('it'), ColorController.deleteColor);

module.exports = router;