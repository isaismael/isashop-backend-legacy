const { OrderItem, Order, ProductVariation } = require("../models");

class OrderItemRepository {
  // crear un order item
  async createOrderItem(orderItem) {
    return await OrderItem.create(orderItem);
  }

  // traer con paginacion
  async getOrderItems(page = 1, limit = 10) {
    const offset = (page - 1) * limit;
    const orderItems = await OrderItem.findAll({
      offset,
      limit,
      include: [
        { model: Order, as: "order" },
        { model: ProductVariation, as: "product_variation" },
      ],
    });
    const total = await OrderItem.count();
    return {
      data: orderItems,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
  // traer sin paginacion
  async getAllOrderItems() {
    return await OrderItem.findAll({
      include: [
        { model: Order, as: "order" },
        { model: ProductVariation, as: "product_variation" },
      ],
    });
  }
  // traer por id
  async getOrderItemById(id) {
    return await OrderItem.findByPk(id, {
      include: [
        { model: Order, as: "order" },
        { model: ProductVariation, as: "product_variation" },
      ],
    });
  }
  // hacer update
  async updateOrderItem(id, orderItem) {
    await OrderItem.update(orderItem, {
      where: { id: id },
    });
    return this.getOrderItemById(id);
  }

}

module.exports = new OrderItemRepository();
