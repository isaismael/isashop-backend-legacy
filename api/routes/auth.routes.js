const express = require('express');
const authController = require('../controllers/auth.controller');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/register', authenticateToken, authorizeRoles('it'), authController.register);
router.post('/login', authController.login);

module.exports = router;