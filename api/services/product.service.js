const ProductRepository = require('../repository/product.repository');

class ProductService{
    async getAllProducts(page = 1, limit = 10) {
        return await ProductRepository.getAllProducts(page, limit);
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