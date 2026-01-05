const express = require('express');
const ColorController = require('../controllers/color.controller');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/getcolors', authenticateToken, authorizeRoles('it'), ColorController.getAllColors);
router.post('/createcolor', authenticateToken, authorizeRoles('it'), ColorController.createColor);

module.exports = router;