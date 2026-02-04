const PermissionsController = require('../controllers/permissions.controller');
const express = require('express');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createpermission', authenticateToken, authorizeRoles('IT'), PermissionsController.createPermission);

module.exports = router;