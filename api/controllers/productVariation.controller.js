const ProductVariationService = require('../services/productVariation.service');

class ProductVariationController{
    async getAllProductVariations(req, res) {
        try {
            const productVariations = await ProductVariationService.getAllProductVariations();
            res.status(200).json(productVariations);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getProductVariationById(req, res) {
        try {
            const { id } = req.params;
            const productVariation = await ProductVariationService.getProductVariationById(id);
            if (!productVariation) {
                return res.status(404).json({ message: 'Product Variation not found' });
            }
            res.status(200).json(productVariation);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createProductVariation(req, res) {
        try {
            const productVariation = await ProductVariationService.createProductVariation(req.body);
            res.status(201).json(productVariation);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateProductVariation(req, res) {
        try {
            const { id } = req.params;
            const updatedProductVariation = await ProductVariationService.updateProductVariation(id, req.body);
            if (!updatedProductVariation) {
                return res.status(404).json({ message: 'Product Variation not found' });
            }
            res.status(200).json(updatedProductVariation);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteProductVariation(req, res) {
        try {
            const { id } = req.params;
            const deleted = await ProductVariationService.deleteProductVariation(id);
            if (!deleted) {
                return res.status(404).json({ message: 'Product Variation not found' });
            }
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


}

module.exports = new ProductVariationController();