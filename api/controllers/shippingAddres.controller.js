const ShippingAdressService = require("../services/shippingAddres.services");

class ShippingAdressController {
  async createShippingAdress(req, res) {
    try {
      const shippingAdress = await ShippingAdressService.createShippingAdress(
        req.body,
      );
      res.status(201).json(shippingAdress);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getShippingAdressById(req, res) {
    try {
      const { id } = req.params;
      const shippingAdress =
        await ShippingAdressService.getShippingAdressById(id);
      if (!shippingAdress) {
        return res.status(404).json({ message: "Shipping adress not found" });
      }
      res.status(200).json(shippingAdress);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getShippingAdresses(req, res) {
    try {
      const page = parseInt(req.params.page) || 1;
      const limit = parseInt(req.params.limit) || 10;
      const shippingAdresses = await ShippingAdressService.getShippingAdresses(
        page,
        limit,
      );
      res.status(200).json(shippingAdresses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllShippingAdresses(req, res) {
    try {
      const shippingAdresses =
        await ShippingAdressService.getAllShippingAdresses();
      res.status(200).json(shippingAdresses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateShippingAdress(req, res) {
    try {
      const { id } = req.params;
      const shippingAdress = await ShippingAdressService.updateShippingAdress(
        id,
        req.body,
      );
      if (!shippingAdress) {
        res.status(404).json({ message: "Shipping adress not found" });
      }
      res.status(200).json(shippingAdress);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ShippingAdressController();
