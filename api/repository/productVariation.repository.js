const { ProductVariation, Product, ProductImage ,Color, Size, Stock } = require('../models');


class ProductVariationRepository{
    async getAllProductVariations() {
        return await ProductVariation.findAll({
            where: { active: 1 },
            include: [
                { model: Product, as: 'product' },
                { model: Color, as: 'color' },
                { model: Size, as: 'size' },
                { model: ProductImage, as: 'product_images' },
                { model: Stock, as: 'stocks' }
            ]
        });
    }

    async getProductVariationById(id) {
        const productVariation = await ProductVariation.findByPk(id, {
            include: [
                { model: Product, as: 'product' },
                { model: Color, as: 'color' },
                { model: Size, as: 'size' },
                { model: ProductImage, as: 'product_images' },
                { model: Stock, as: 'stocks' }
            ]
        });

        if (!productVariation) throw new Error('Product Variation not found');
        return productVariation;
    }

    async createProductVariation(productVariation) {
        return await ProductVariation.create(productVariation);
    }

    async updateProductVariation(id, productVariation) {
        await ProductVariation.update(productVariation, { where: { id } });
        return this.getProductVariationById(id);
    }

    async deleteProductVariation(id) {
        return await ProductVariation.update(
            { active: 0 },
            { where: { id } }
        );
    }

}

module.exports = new ProductVariationRepository();