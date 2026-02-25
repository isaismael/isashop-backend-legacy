const ProductGridController = require("../controllers/productGrid.controller");
const express = require("express");
const {
  authenticateToken,
  authorizePermissions,
} = require("../middleware/auth.middleware");

const router = express.Router();

// createProductGrid
router.post(
  "/createproductgrid",
  authenticateToken,
  authorizePermissions("product.create"),
  ProductGridController.createProductGrid,
);

// getAllProductGrids
router.get(
  "/getproductgrids",
  authenticateToken,
  authorizePermissions("product.read"),
  ProductGridController.getAllProductGrids,
);

// getProductGridById
router.get(
  "/getproductgrid/:id",
  authenticateToken,
  authorizePermissions("product.read"),
  ProductGridController.getProductGridById,
);

// updateProductGrid
router.put(
  "/update/:id",
  authenticateToken,
  authorizePermissions("product.update"),
  ProductGridController.updateProductGrid,
);

// getProductGridByIdPublic
router.get(
  "/public/getproductgrid/:id",
  ProductGridController.getProductGridByIdPublic,
);

module.exports = router;
