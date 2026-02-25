const { Router } = require("express");
const collectionsController = require("../controllers/collection.controller");
const {
  authenticateToken,
  authorizeRoles,
  authorizePermissions,
} = require("../middleware/auth.middleware");

const router = Router();

// Collections CRUD
router.get(
  "/collections",
  authenticateToken,
  authorizeRoles("IT"),
  collectionsController.getAll.bind(collectionsController),
);
router.get(
  "/collection/:id",
  authenticateToken,
  authorizeRoles("IT"),
  collectionsController.getById.bind(collectionsController),
);
router.get(
  "/:id/products",
  authenticateToken,
  authorizeRoles("IT"),
  collectionsController.getWithProducts.bind(collectionsController),
);
router.post(
  "/createcollection",
  authenticateToken,
  authorizeRoles("IT"),
  collectionsController.create.bind(collectionsController),
);
router.put("/:id", collectionsController.update.bind(collectionsController));
router.delete(
  "/:id",
  authenticateToken,
  authorizeRoles("IT"),
  collectionsController.delete.bind(collectionsController),
);

// Collection <-> Product relationship
router.post(
  "/:id/products",
  authenticateToken,
  authorizeRoles("IT"),
  collectionsController.addProduct.bind(collectionsController),
);
router.delete(
  "/:id/products/:product_id",
  authenticateToken,
  authorizeRoles("IT"),
  collectionsController.removeProduct.bind(collectionsController),
);

// -> ruta publica para ver la coleccion por id
router.get(
  "/public/collection/:id",
  collectionsController.getByIdPublic.bind(collectionsController),
);

module.exports = router;
