const CategoryBubblesController = require("../controllers/categoryBubbles.controller");
const express = require("express");
const {
  authenticateToken,
  authorizeRoles,
  authorizePermissions,
} = require("../middleware/auth.middleware");

const router = express.Router();

// crear CategoryBubbles
router.post(
  "/createcategorybubbles",
  authenticateToken,
  authorizeRoles("IT"),
  CategoryBubblesController.createCategoryBubbles,
);
// traer todas las CategoryBubbles
router.get(
  "/getcategorybubbles",
  CategoryBubblesController.getAllCategoryBubbles,
);
// update de CategoryBubbles
router.put(
  "/updatecategorybubbles/:id",
  authenticateToken,
  authorizeRoles("IT"),
  CategoryBubblesController.updateCategoryBubbles,
);

module.exports = router;
