const express = require('express');
const authRoutes = require('./auth.routes');
const BrandRoutes = require('./brand.routes');
const DepartamentRoutes = require('./department.routes');

const router = express.Router();

// Rutas de autenticación
router.use('/auth', authRoutes);
router.use('/brand', BrandRoutes);
router.use('/departament', DepartamentRoutes);


module.exports = router;