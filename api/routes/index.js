const express = require('express');
const authRoutes = require('./auth.routes');
const BrandRoutes = require('./brand.routes');
const BrandImage = require('./brandImage.routes');
const DepartamentRoutes = require('./department.routes');
const CategoryRoutes = require('./category.routes');
const SubCategoryRoutes = require('./subcategory.routes');
const ProductRoutes = require('./product.routes');
const ProductVariationRoutes = require('./productVariation.routes');
const ColorRoutes = require('./color.routes');
const SizeRoutes = require('./size.routes');
const ProductImageRoutes = require('./productImage.routes');
const WarehouseRoutes = require('./warehouse.routes');
const StockRoutes = require('./stock.routes');
const PermissionsRoutes = require('./permissions.routes');

const router = express.Router();

// rutas de autenticación
router.use('/auth', authRoutes);
router.use('/brand', BrandRoutes);
router.use('/brandImage', BrandImage);
router.use('/departament', DepartamentRoutes);
router.use('/category', CategoryRoutes);
router.use('/subcategory', SubCategoryRoutes);
router.use('/product', ProductRoutes);
router.use('/productvariation', ProductVariationRoutes);
router.use('/color', ColorRoutes);
router.use('/size', SizeRoutes);
router.use('/productimage', ProductImageRoutes);
router.use('/warehouse', WarehouseRoutes);
router.use('/stock', StockRoutes);
router.use('/permissions', PermissionsRoutes)

module.exports = router;