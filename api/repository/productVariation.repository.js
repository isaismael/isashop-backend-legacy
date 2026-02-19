const { ProductVariation, Product, ProductImage, Color, Size, Stock } = require('../models');


class ProductVariationRepository {
    async getAllProductVariations(product_id) {

    const whereClause = { active: 1 };

    if (product_id) {
        whereClause.product_id = product_id;
    }

    return await ProductVariation.findAll({
        where: whereClause,
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

    async createProductVariation(data) {
        // Convertir strings vacíos a null para FK opcionales
        const sanitized = {
            ...data,
            color_id: data.color_id !== '' ? data.color_id : null,
            size_id: data.size_id !== '' ? data.size_id : null,
            sku_variation: data.sku_variation !== '' ? data.sku_variation : null,
            older_price: data.older_price !== '' ? data.older_price : null,
        };

        const productVariation = await ProductVariation.create(sanitized);
        return productVariation;
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