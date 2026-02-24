const OrderItemRepository = require("../repository/orderItem.repository");

class OrderItemService {
  async createOrderItem(orderItem) {
    return await OrderItemRepository.createOrderItem(orderItem);
  }

  async getOrderItems(page = 1, limit = 10) {
    return await OrderItemRepository.getOrderItems(page, limit);
  }

  async getAllOrderItems() {
    return await OrderItemRepository.getAllOrderItems();
  }

  async getOrderItemById(id) {
    return await OrderItemRepository.getOrderItemById(id);
  }

  async updateOrderItem(id, orderItem) {
    return await OrderItemRepository.updateOrderItem(id, orderItem);
  }
}

module.exports = new OrderItemService();
