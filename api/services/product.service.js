const ProductRepository = require("../repository/product.repository");

class ProductService {
  async getAllProducts(filters) {
    return await ProductRepository.getAllProducts(filters);
  }

  async getProductById(id) {
    return await ProductRepository.getProductById(id);
  }

  async createProduct(product) {
    return await ProductRepository.createProduct(product);
  }

  async updateProduct(id, product) {
    return await ProductRepository.updateProduct(id, product);
  }

  async deleteProduct(id) {
    return await ProductRepository.deleteProduct(id);
  }
}

module.exports = new ProductService();