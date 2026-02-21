const express = require("express");
const AuthController = require("../controllers/auth.controller");
const CustomerController = require("../controllers/customer.controller");

const router = express.Router();

router.post("/customer/register", CustomerController.registerCustomer);
router.post("/customer/login", CustomerController.loginCustomer);

module.exports = router;
