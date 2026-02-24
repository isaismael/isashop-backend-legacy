const PickupAddressController = require("../controllers/pickupAddress.controller");
const express = require("express");
const {
  authenticateToken,
  authorizeRoles,
  authorizePermissions,
} = require("../middleware/auth.middleware");

const router = express.Router();

// -> creare PickupAddress
router.post(
  "/createpickupaddress",
  authenticateToken,
  authorizeRoles("IT"),
  PickupAddressController.createPickupAddress,
);
// -> traer sin paginacion PickupAddress
router.get(
  "/getallpickupaddresses",
  authenticateToken,
  authorizeRoles("IT"),
  PickupAddressController.getAllPickupAddresses,
);
// -> con paginacion PickupAddress
router.get(
    "/getpickupaddresses",
    authenticateToken,
    authorizeRoles("IT"),
    PickupAddressController.getPickupAddresses,
)
// -> traer por id PickupAddress
router.get(
    "/pickupaddressesbyid/:id",
    authenticateToken,
    PickupAddressController.getPickupAddressById,
)

// -> update PickupAddress
router.put(
    "/updatepickupaddresses/:id",
    authenticateToken,
    authorizeRoles("IT"),
    PickupAddressController.updatePickupAddress,
)

// -> solo los activos por va a ser public
router.get(
    "/public/activepickupaddresses",
    PickupAddressController.getActivePickupAddresses,
)

module.exports = router;
