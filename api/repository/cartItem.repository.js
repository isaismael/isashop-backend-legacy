const { CartItem } = require("../models");

class CartItemRepository {

  async findItem(cartId, productVariationId) {
    return await CartItem.findOne({
      where: {
        cart_id: cartId,
        product_variation_id: productVariationId,
      },
    });
  }

  async createItem(data) {
    return await CartItem.create(data);
  }

  async updateQuantity(item, quantity) {
    item.quantity = quantity;
    return await item.save();
  }

  async deleteItem(id) {
    return await CartItem.destroy({ where: { id } });
  }
}

module.exports = new CartItemRepository();