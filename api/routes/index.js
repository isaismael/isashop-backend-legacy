const express = require('express');
const authRoutes = require('./auth.routes');
const BrandRoutes = require('./brand.routes');
const BrandImage = require('./brandImage.routes');
const DepartmentRoutes = require('./department.routes');
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
const ProvinceRoutes = require('./province.routes');
const ShippingCostRoutes = require('./shippingCost.routes');
const ShippingAddresRoutes = require('./shippingAddres.routes');
const OrderRoutes = require('./order.routes');

//-> store frontend
const CustomerRoutes = require('./customer.routes');
const CartRoutes = require('./cart.routes');

// -> mercadopago
const PreferenceRoutes = require('./preference.routes');

const router = express.Router();

// rutas de autenticación
router.use('/auth', authRoutes);
router.use('/brand', BrandRoutes);
router.use('/brandImage', BrandImage);
router.use('/department', DepartmentRoutes);
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
router.use('/province', ProvinceRoutes);
router.use('/shippingcost', ShippingCostRoutes);
router.use('/shippingaddres', ShippingAddresRoutes);
router.use('/order', OrderRoutes);

//-> store frontend
router.use('/customer', CustomerRoutes);
router.use('/cart', CartRoutes);

// -> mercadopago
router.use('/preference', PreferenceRoutes);

module.exports = router;