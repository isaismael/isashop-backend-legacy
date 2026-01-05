const express = require('express');
const authRoutes = require('./auth.routes');
const BrandRoutes = require('./brand.routes');
const DepartamentRoutes = require('./department.routes');
const CategoryRoutes = require('./category.routes');
const SubCategoryRoutes = require('./subcategory.routes');
const ProductRoutes = require('./product.routes');


const router = express.Router();

// rutas de autenticación
router.use('/auth', authRoutes);
router.use('/brand', BrandRoutes);
router.use('/departament', DepartamentRoutes);
router.use('/category', CategoryRoutes);
router.use('/subcategory', SubCategoryRoutes);
router.use('/product', ProductRoutes);

module.exports = router;