const ProductRepository = require("../repository/product.repository");

class ProductService {
  async getAllProducts(filters) {
    return await ProductRepository.getAllProducts(filters);
  }
  
  async getAllProductsPublic(filters) {
    return await ProductRepository.getAllProductsPublic(filters);
  }

  async getProductById(id) {
    return await ProductRepository.getProductById(id);
  }

  async getProductByIdPublic(id) {
    return await ProductRepository.getProductByIdPublic(id);
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