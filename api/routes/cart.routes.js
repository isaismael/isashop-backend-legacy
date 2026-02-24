const express = require("express");
const CartController = require("../controllers/cart.controller");
const { authenticateToken } = require("../middleware/auth.middleware");

const router = express.Router();

//-> al tener que loguearse el cliente todas requieren token
router.use(authenticateToken);

router.get("/", CartController.getCart);
router.post("/item", CartController.addItem);
router.put("/item", CartController.updateItem);
router.delete("/item/:product_variation_id", CartController.removeItem);
router.put("/deactivate/:customer_id", CartController.deactivateCart);

module.exports = router;
