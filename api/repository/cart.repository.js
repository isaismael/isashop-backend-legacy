const {
  Cart,
  CartItem,
  ProductVariation,
  Product,
  Color,
  Size,
} = require("../models");

class CartRepository {
  async findByCustomerId(customerId) {
    return await Cart.findOne({
      where: { customer_id: customerId, is_active: 1 },
      include: [
        {
          model: CartItem,
          as: "cart_items",
          include: [
            {
              model: ProductVariation,
              as: "product_variation",
              include: [
                { model: Product, as: "product" },
                { model: Color, as: "color" },
                { model: Size, as: "size" },
              ],
            },
          ],
        },
      ],
    });
  }

  async createCart(customerId) {
    return await Cart.create({ customer_id: customerId });
  }

  async deactivateByCustomerId(customerId) {
    return await Cart.update(
      { is_active: 0 },
      { where: { customer_id: customerId, is_active: 1 } },
    );
  }
}

module.exports = new CartRepository();
