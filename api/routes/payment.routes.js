const express = require("express");
const PaymentMethodController = require("../controllers/payment.controller");
const {
  authenticateToken,
  authorizeRoles,
  authorizePermissions,
} = require("../middleware/auth.middleware");

const router = express.Router();

// -> crear un metodo de pago
router.post(
  "/createpaymentmethod",
  authenticateToken,
  authorizeRoles("IT"),
  PaymentMethodController.createPaymentMethod,
);

// -> traer metodos de pago sin paginacion
router.get(
  "/allpaymentmethods",
  authenticateToken,
  authorizeRoles("IT"),
  PaymentMethodController.getAllPaymentMethods,
);

// -> traer metodos de pago con paginacion
router.get(
  "/getpaymentmethods/",
  authenticateToken,
  authorizeRoles("IT"),
  PaymentMethodController.getPaymentMethods,
);

// -> traer un metodo de pago por id
router.get(
  "/paymentbyid/:id",
  authenticateToken,
  authorizeRoles("IT"),
  PaymentMethodController.getPaymentMethodById,
);

// -> actualizar un metodo de pago por id
router.put(
  "/updatepayment/:id",
  authenticateToken,
  authorizeRoles("IT"),
  PaymentMethodController.updatePaymentMethod,
);

// -> activar o desactivar un metodo de pago por id
router.put(
  "/disableapayment/:id",
  authenticateToken,
  authorizeRoles("IT"),
  PaymentMethodController.toggleActive,
);

// -> solo los activos porque será publico
router.get("/activepayment", PaymentMethodController.getActivePaymentMethods);

module.exports = router;
