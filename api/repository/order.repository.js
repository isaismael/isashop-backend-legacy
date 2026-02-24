const {
  Order,
  Customer,
  PaymentMethod,
  ShippingAdress,
  Warehouse,
  ProductVariation,
  sequelize
} = require("../models");

class OrderRepository {
  // crear orden
  async createOrder(order) {
    return await Order.create(order);
  }

  // con paginacion
  async getOrders(page = 1, limit = 10) {
    const offset = (page - 1) * limit;
    const orders = await Order.findAll({
      offset,
      limit,
      include: [
        {
          model: Customer,
          as: "customer",
        },
        {
          model: PaymentMethod,
          as: "payment_method",
        },
        {
          model: ShippingAdress,
          as: "shipping_adress",
        },
        {
          model: Warehouse,
          as: "warehouse",
        },
        {
          model: ProductVariation,
          as: "product_variation",
        },
      ],
    });
    const total = await Order.count();
    return {
      data: orders,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  // sin paginacion
  async getAllOrders() {
    return await Order.findAll({
      include: [
        {
          model: Customer,
          as: "customer",
        },
        {
          model: PaymentMethod,
          as: "payment_method",
        },
        {
          model: ShippingAdress,
          as: "shipping_adress",
        },
        {
          model: Warehouse,
          as: "warehouse",
        },
        {
          model: ProductVariation,
          as: "product_variation",
        },
      ],
    });
  }

  // get por id
  async getOrderById(id) {
    return await Order.findByPk(id, {
      include: [
        {
          model: Customer,
          as: "customer",
        },
        {
          model: PaymentMethod,
          as: "payment_method",
        },
        {
          model: ShippingAdress,
          as: "shipping_adress",
        },
        {
          model: Warehouse,
          as: "warehouse",
        },
        {
          model: ProductVariation,
          as: "product_variation",
        },
      ],
    });
  }

  // update order
  async updateOrder(id, order) {
    await Order.update(order, {
      where: { id: id },
    });
    return this.getOrderById(id);
  }

  async createOrderWithItems({ order, items }) {
    const t = await sequelize.transaction();
    try {
      const newOrder = await Order.create(order, { transaction: t });

      const orderItems = items.map((item) => ({
        order_id: newOrder.id,
        product_variation_id: item.product_variation_id,
        quantity: item.quantity,
        unit_price: item.unit_price,
        discount: item.discount ?? 0,
        subtotal: item.subtotal,
      }));

      await OrderItem.bulkCreate(orderItems, { transaction: t });

      await t.commit();
      return newOrder;
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }
}

module.exports = new OrderRepository();
