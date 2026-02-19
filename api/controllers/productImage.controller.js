const ProductImageService = require('../services/productImage.service');

class ProductImageController {
    async getAllProductImages(req, res) {
        try {
            const images = await ProductImageService.getAllProductImages();
            res.status(200).json(images);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getProductImageById(req, res) {
        try {
            const { id } = req.params;
            const image = await ProductImageService.getProductImageById(id);
            if (!image) return res.status(404).json({ message: 'Product Image not found' });
            res.status(200).json(image);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createProductImage(req, res) {
        try {
            const { product_variation_id, product_id, is_main } = req.body;

            if (!req.file) {
                return res.status(400).json({ error: "No se recibió ninguna imagen" });
            }

            if (!product_id || !product_variation_id) {
                return res.status(400).json({ error: "product_id y product_variation_id son requeridos" });
            }

            const imageData = {
                product_id: Number(product_id),
                product_variation_id: Number(product_variation_id),
                url: req.file.path.replace(/\\/g, '/'),
                is_main: is_main ? Number(is_main) : 0,
            };

            const image = await ProductImageService.createProductImage(imageData);
            res.status(201).json(image);
        } catch (error) {
            console.error("Error en createProductImage:", error);
            res.status(500).json({ error: error.message });
        }
    }

    async updateProductImage(req, res) {
        try {
            const { id } = req.params;
            const updated = await ProductImageService.updateProductImage(id, req.body);
            if (!updated) return res.status(404).json({ message: 'Product Image not found' });
            res.status(200).json(updated);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteProductImage(req, res) {
        try {
            const { id } = req.params;
            const deleted = await ProductImageService.deleteProductImage(id);
            if (!deleted) return res.status(404).json({ message: 'Product Image not found' });
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ProductImageController();