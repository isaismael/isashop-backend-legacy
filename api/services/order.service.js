const OrderRepository = require('../repository/order.repository');

class OrderService{

    
  async createOrder(order) {
    return await OrderRepository.createOrder(order);
  }

  async getOrders(page = 1, limit = 10) {
    return await OrderRepository.getOrders(page, limit);
  }

  async getAllOrders() {
    return await OrderRepository.getAllOrders();
  }

  async getOrderById(id) {
    return await OrderRepository.getOrderById(id);
  }

  async updateOrder(id, order) {
    return await OrderRepository.updateOrder(id, order);
  }

  async createOrderWithItems(data) {
  return await OrderRepository.createOrderWithItems(data);
}

async getOrdersByCustomer(customer_id) {
  return await OrderRepository.getOrdersByCustomer(customer_id);
}

}

module.exports = new OrderService();