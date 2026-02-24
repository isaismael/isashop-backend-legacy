const OrderItemService = require("../services/orderItem.service");

class OrderItemController {
  // crear un order item
  async createOrderItem(orderItem) {
    return await OrderItemService.createOrderItem(orderItem);
  }

  // con paginacion
  async getOrderItems(page = 1, limit = 10) {
    try {
      const page = parseInt(req.params.page) || 1;
      const limit = parseInt(req.params.limit) || 10;
      const orderItems = await OrderItemService.getOrderItems(page, limit);
      res.status(200).json(orderItems);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // sin paginacion
  async getAllOrderItems() {
    try {
      const orderItems = await OrderItemService.getAllOrderItems();
      res.status(200).json(orderItems);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // by id
  async getOrderItemById(req, res) {
    try {
      const { id } = req.params;
      const orderItem = await OrderItemService.getOrderItemById(id);
      if (!orderItem) {
        return res.status(404).json({ message: "Order item not found" });
      }
      res.status(200).json(orderItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // update
  async updateOrderItem(req, res) {
    try {
      const { id } = req.params;
      const orderItem = await OrderItemService.updateOrderItem(id, req.body);
      if (!orderItem) {
        res.status(404).json({ message: "Order item not found" });
      }
      res.status(200).json(orderItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new OrderItemController();
