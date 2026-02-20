const express = require("express");
const ProductController = require("../controllers/product.controller");
const {
  authenticateToken,
  authorizePermissions,
} = require("../middleware/auth.middleware");

const router = express.Router();

router.post(
  "/createproduct",
  authenticateToken,
  authorizePermissions("product.create"),
  ProductController.createProduct
);

router.get(
  "/getproducts",
  authenticateToken,
  authorizePermissions("product.read"),
  ProductController.getAllProducts
);

router.get(
  "/getproduct/:id",
  authenticateToken,
  authorizePermissions("product.read"),
  ProductController.getProductById
);

router.put(
  "/updateproduct/:id",
  authenticateToken,
  authorizePermissions("product.update"),
  ProductController.updateProduct
);

router.delete(
  "/deleteproduct/:id",
  authenticateToken,
  authorizePermissions("product.delete"),
  ProductController.deleteProduct
);

// -> rutas publicas para el store
router.get(
  "/public/getproducts",
  ProductController.getAllProducts
);

router.get(
  "/public/getproduct/:id",
  ProductController.getProductById
);

module.exports = router;