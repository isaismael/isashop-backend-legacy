const sequelize = require('../config/connect');
const { Order, OrderItem, Customer, PaymentMethod, ShippingAdress, Warehouse, ProductVariation, Product, PickupAddress, Cart, CartItem, Stock } = require("../models");

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
      order: [["created_at", "DESC"]],
      include: [
        { model: PickupAddress, as: "pickup_address" },
        { model: Customer, as: "customer" },
        { model: PaymentMethod, as: "payment_method" },
        { model: ShippingAdress, as: "shipping_adress" },
        { model: Warehouse, as: "warehouse" },
        {
          model: OrderItem,
          as: "order_items",
          include: [
            {
              model: ProductVariation,
              as: "product_variation",
              include: [{ model: Product, as: "product" }],
            },
          ],
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
      order: [["created_at", "DESC"]],
      include: [
        { model: PickupAddress, as: "pickup_address" },
        { model: Customer, as: "customer" },
        { model: PaymentMethod, as: "payment_method" },
        { model: ShippingAdress, as: "shipping_adress" },
        { model: Warehouse, as: "warehouse" },
        {
          model: OrderItem,
          as: "order_items",
          include: [
            {
              model: ProductVariation,
              as: "product_variation",
              include: [{ model: Product, as: "product" }],
            },
          ],
        },
      ],
    });
  }

  // get por id
  async getOrderById(id) {
    return await Order.findByPk(id, {
      include: [
        { model: PickupAddress, as: "pickup_address" },
        { model: Customer, as: "customer" },
        { model: PaymentMethod, as: "payment_method" },
        { model: ShippingAdress, as: "shipping_adress" },
        { model: Warehouse, as: "warehouse" },
        {
          model: OrderItem,
          as: "order_items",
          include: [
            {
              model: ProductVariation,
              as: "product_variation",
              include: [{ model: Product, as: "product" }],
            },
          ],
        },
      ],
    });
  }

  // update order
  async updateOrder(id, order) {
    await Order.update(order, { where: { id } });
    return this.getOrderById(id);
  }

  // crear orden con items (transacción)
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

      // -> Descontar stock por cada item
      for (const item of items) {
        const stock = await Stock.findOne({
          where: {
            product_variation_id: item.product_variation_id,
            warehouse_id: order.warehouse_id,
          },
          transaction: t,
        });

        if (!stock) {
          throw new Error(
            `Stock no encontrado para la variación ${item.product_variation_id}`
          );
        }

        if (stock.quantity < item.quantity) {
          throw new Error(
            `Stock insuficiente para la variación ${item.product_variation_id}. Disponible: ${stock.quantity}, requerido: ${item.quantity}`
          );
        }

        await stock.update(
          { quantity: stock.quantity - item.quantity },
          { transaction: t }
        );
      }

      // Vaciar el carrito activo del cliente
      const activeCart = await Cart.findOne({
        where: { customer_id: order.customer_id, is_active: 1 },
        transaction: t,
      });

      if (activeCart) {
        await CartItem.destroy({ where: { cart_id: activeCart.id }, transaction: t });
        await activeCart.update({ is_active: 0 }, { transaction: t });
      }

      await t.commit();
      return newOrder;
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }

  async getOrdersByCustomer(customer_id) {
    return await Order.findAll({
      where: { customer_id },
      order: [["created_at", "DESC"]],
      include: [
        { model: PickupAddress, as: "pickup_address" },
        { model: PaymentMethod, as: "payment_method" },
        { model: ShippingAdress, as: "shipping_adress" },
        {
          model: OrderItem,
          as: "order_items",
          include: [
            {
              model: ProductVariation,
              as: "product_variation",
              include: [{ model: Product, as: "product" }],
            },
          ],
        },
      ],
    });
  }

}

module.exports = new OrderRepository();