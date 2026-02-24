const cartRepository = require("../repository/cart.repository");
const cartItemRepository = require("../repository/cartItem.repository");

class CartService {
  async getOrCreateCart(customerId) {
    let cart = await cartRepository.findByCustomerId(customerId);

    if (!cart) {
      cart = await cartRepository.createCart(customerId);
    }

    return cart;
  }

  async getCart(customerId) {
    return await cartRepository.findByCustomerId(customerId);
  }

  async addItem(customerId, productVariationId, quantity) {
    let cart = await this.getOrCreateCart(customerId);

    let existingItem = await cartItemRepository.findItem(
      cart.id,
      productVariationId,
    );

    if (existingItem) {
      return await cartItemRepository.updateQuantity(
        existingItem,
        existingItem.quantity + quantity,
      );
    }

    return await cartItemRepository.createItem({
      cart_id: cart.id,
      product_variation_id: productVariationId,
      quantity,
    });
  }

  async updateItem(customerId, productVariationId, quantity) {
    const cart = await this.getOrCreateCart(customerId);

    const item = await cartItemRepository.findItem(cart.id, productVariationId);

    if (!item) throw new Error("Item no encontrado");

    return await cartItemRepository.updateQuantity(item, quantity);
  }

  async removeItem(customerId, productVariationId) {
    const cart = await this.getOrCreateCart(customerId);

    const item = await cartItemRepository.findItem(cart.id, productVariationId);

    if (!item) throw new Error("Item no encontrado");

    return await cartItemRepository.deleteItem(item.id);
  }

  async deactivateCart(customerId) {
    return await cartRepository.deactivateByCustomerId(customerId);
  }
}

module.exports = new CartService();
