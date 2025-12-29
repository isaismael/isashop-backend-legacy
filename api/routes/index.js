const express = require('express');
const authRoutes = require('./auth.routes');

const router = express.Router();

// Rutas de autenticación
router.use('/auth', authRoutes);

module.exports = router;