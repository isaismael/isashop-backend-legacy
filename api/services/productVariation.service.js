const ProductVariationRepository = require('../repository/productVariation.repository');

class ProductVariationService{
    async getAllProductVariations() {
        return await ProductVariationRepository.getAllProductVariations();
    }

    async getProductVariationById(id) {
        return await ProductVariationRepository.getProductVariationById(id);
    }

    async createProductVariation(productVariation) {
        return await ProductVariationRepository.createProductVariation(productVariation);
    }

    async updateProductVariation(id, productVariation) {
        return await ProductVariationRepository.updateProductVariation(id, productVariation);
    }

    async deleteProductVariation(id) {
        return await ProductVariationRepository.deleteProductVariation(id);
    }

}

module.exports = new ProductVariationService();