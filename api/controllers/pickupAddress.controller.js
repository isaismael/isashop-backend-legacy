const PickupAddressService = require("../services/pickupAddress.service");

class PickupAddressController {
  async createPickupAddress(req, res) {
    try {
      const pickupAddress = await PickupAddressService.createPickupAddress(
        req.body,
      );
      res.status(201).json(pickupAddress);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllPickupAddresses(req, res) {
    try {
      const pickupAddresses =
        await PickupAddressService.getAllPickupAddresses();
      res.status(200).json(pickupAddresses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getPickupAddresses(req, res) {
    try {
      const { page, limit } = req.query;
      const pickupAddresses = await PickupAddressService.getPickupAddresses(
        page ? parseInt(page) : undefined,
        limit ? parseInt(limit) : undefined,
      );
      res.status(200).json(pickupAddresses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getPickupAddressById(req, res) {
    try {
      const pickupAddress = await PickupAddressService.getPickupAddressById(
        req.params.id,
      );
      if (!pickupAddress) {
        return res.status(404).json({ message: "Pickup address not found" });
      }
      res.status(200).json(pickupAddress);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updatePickupAddress(req, res) {
    try {
      const pickupAddress = await PickupAddressService.updatePickupAddress(
        req.params.id,
        req.body,
      );
      res.status(200).json(pickupAddress);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getActivePickupAddresses(req, res) {
    try {
      const pickupAddresses =
        await PickupAddressService.getActivePickupAddresses();
      res.status(200).json(pickupAddresses);
    } catch {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new PickupAddressController();
