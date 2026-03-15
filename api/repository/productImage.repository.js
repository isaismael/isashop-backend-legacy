const { ProductImage, ProductVariation, Product } = require('../models');
const fs = require('fs/promises');
const path = require('path');

class ProductImageRepository {
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
        const productImage = await ProductImage.findByPk(id);

        if (!productImage) {
            throw new Error('Product Image not found');
        }

        if (productImage.url) {
            const filePath = path.join(process.cwd(), productImage.url);

            try {
                await fs.unlink(filePath);
            } catch (error) {
                if (error.code !== 'ENOENT') {
                    throw error;
                }
            }
        }

        await ProductImage.destroy({
            where: { id }
        });

        return true;
    }
}

module.exports = new ProductImageRepository();