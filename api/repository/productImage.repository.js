const { ProductImage, ProductVariation, Product} = require('../models');

class ProductImageRepository{
    async getAllProductImages() {
        return await ProductImage.findAll({
            where: { active: 1 },
            include: [
                { model: ProductVariation, as: 'product_variation' },
                { model: Product, as: 'product' }
            ]
        });
    }

    async getProductImageById(id) {
        const productImage = await ProductImage.findByPk(id, {
            include: [
                { model: ProductVariation, as: 'product_variation' },
                { model: Product, as: 'product' }
            ]
        });

        if (!productImage) throw new Error('Product Image not found');
        return productImage;
    }

    async createProductImage(productImage) {
        return await ProductImage.create(productImage);
    }

    async updateProductImage(id, productImage) {
        await ProductImage.update(productImage, { where: { id } });
        return this.getProductImageById(id);
    }

    async deleteProductImage(id) {
        return await ProductImage.update(
            { active: 0 },
            { where: { id } }
        );
    }

}

module.exports = new ProductImageRepository();