const ProductImageRepository = require('../repository/productImage.repository');

class ProductImageService{
    async getAllProductImages() {
        return await ProductImageRepository.getAllProductImages();
    }

    async getProductImageById(id) {
        return await ProductImageRepository.getProductImageById(id);
    }

    async createProductImage(productImage) {
        return await ProductImageRepository.createProductImage(productImage);
    }

    async updateProductImage(id, productImage) {
        return await ProductImageRepository.updateProductImage(id, productImage);
    }

    async deleteProductImage(id) {
        return await ProductImageRepository.deleteProductImage(id);
    }

}

module.exports = new ProductImageService();