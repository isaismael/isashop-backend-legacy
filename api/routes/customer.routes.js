const express = require("express");
const AuthController = require("../controllers/auth.controller");
const CustomerController = require("../controllers/customer.controller");
const { authenticateToken } = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/customer/register", CustomerController.registerCustomer);
router.post("/customer/login", CustomerController.loginCustomer);

//
router.get("/getcustomer/:id", authenticateToken, CustomerController.getCustomerById);
router.put("/updatecustomer/:id", authenticateToken, CustomerController.updateCustomer);

module.exports = router;