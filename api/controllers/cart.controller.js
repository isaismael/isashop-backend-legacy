const cartService = require("../services/cart.service");

class CartController {
  async getCart(req, res) {
    try {
      const customerId = req.user.sub;
      const cart = await cartService.getCart(customerId);
      res.json(cart);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async addItem(req, res) {
    try {
      const customerId = req.user.sub;
      const { product_variation_id, quantity } = req.body;

      if (!product_variation_id || !quantity) {
        return res.status(400).json({ message: "Datos incompletos" });
      }

      const result = await cartService.addItem(
        customerId,
        product_variation_id,
        quantity,
      );

      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateItem(req, res) {
    try {
      const customerId = req.user.sub;
      const { product_variation_id, quantity } = req.body;

      const result = await cartService.updateItem(
        customerId,
        product_variation_id,
        quantity,
      );

      res.json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async removeItem(req, res) {
    try {
      const customerId = req.user.sub;
      const { product_variation_id } = req.params;

      await cartService.removeItem(customerId, product_variation_id);

      res.json({ message: "Item eliminado" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deactivateCart(req, res) {
    try {
      const { customer_id } = req.params;
      await cartService.deactivateCart(customer_id);
      res.status(200).json({ message: "Carrito desactivado" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CartController();
