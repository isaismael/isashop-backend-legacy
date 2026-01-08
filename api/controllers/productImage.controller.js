const ProductImageService = require('../services/productImage.service');
const multer = require('multer');
const path = require('path');

class ProductImageController{
    async getAllProductImages(req, res) {
        try {
            const productImages = await ProductImageService.getAllProductImages();
            res.status(200).json(productImages);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getProductImageById(req, res) {
        try {
            const { id } = req.params;
            const productImage = await ProductImageService.getProductImageById(id);
            if (!productImage) {
                return res.status(404).json({ message: 'Product Image not found' });
            }
            res.status(200).json(productImage);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createProductImage(req, res) {
        try {
            if (!req.file) {
                return res.status(400).json({ error: 'No file uploaded' });
            }
            // Construir la URL con el nombre de la carpeta y el nombre del archivo
            req.body.url = req.file.path;
            const productImage = await ProductImageService.createProductImage(req.body);
            res.status(201).json(productImage);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateProductImage(req, res) {
        try {
            const { id } = req.params;
            const updatedProductImage = await ProductImageService.updateProductImage(id, req.body);
            if (!updatedProductImage) {
                return res.status(404).json({ message: 'Product Image not found' });
            }
            res.status(200).json(updatedProductImage);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteProductImage(req, res) {
        try {
            const { id } = req.params;
            const deleted = await ProductImageService.deleteProductImage(id);
            if (!deleted) {
                return res.status(404).json({ message: 'Product Image not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


}

module.exports = new ProductImageController();