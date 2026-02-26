const OrderService = require("../services/order.service");

class OrderController {
  async createOrder(req, res) {
    try {
      const order = await OrderService.createOrder(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getOrders(req, res) {
    try {
      const { page, limit } = req.query;
      const orders = await OrderService.getOrders(
        page ? parseInt(page) : undefined,
        limit ? parseInt(limit) : undefined,
      );
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllOrders(req, res) {
    try {
      const orders = await OrderService.getAllOrders();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getOrderById(req, res) {
    try {
      const order = await OrderService.getOrderById(req.params.id);
      if (!order) {
        return res.status(404).json({ message: "Orden no encontrada" });
      }
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateOrder(req, res) {
    try {
      const order = await OrderService.updateOrder(req.params.id, req.body);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createOrderWithItems(req, res) {
    try {
      const order = await OrderService.createOrderWithItems(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getOrdersByCustomer(req, res) {
  try {
    const orders = await OrderService.getOrdersByCustomer(req.params.customer_id);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

}

module.exports = new OrderController();
