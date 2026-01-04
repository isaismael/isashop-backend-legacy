const express = require('express');
const authRoutes = require('./auth.routes');
const BrandRoutes = require('./brand.routes');
const DepartamentRoutes = require('./department.routes');
const CategoryRoutes = require('./category.routes');
const SubCategory = require('./subcategory.routes');

const router = express.Router();

// rutas de autenticación
router.use('/auth', authRoutes);
router.use('/brand', BrandRoutes);
router.use('/departament', DepartamentRoutes);
router.use('/category', CategoryRoutes);
router.use('/subcategory', SubCategory);

module.exports = router;