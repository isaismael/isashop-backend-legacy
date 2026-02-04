const BrandService = require('../services/brand.service');

class BrandController {
    async getAllBrands(req, res) {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;

            const brands = await BrandService.getAllBrands(limit, page);
            res.status(200).json(brands);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getBrandById(req, res) {
        try {
            const { id } = req.params;
            const brand = await BrandService.getBrandById(id);
            if (!brand) {
                return res.status(404).json({ message: 'Brand not found' });
            }
            res.status(200).json(brand);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createBrand(req, res) {
        try {
            const brand = await BrandService.createBrand(req.body);
            res.status(201).json(brand);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateBrand(req, res) {
        try {
            const { id } = req.params;
            const [updated] = await BrandService.updateBrand(id, req.body);
            if (!updated) {
                return res.status(404).json({ message: 'Brand not found' });
            }
            const updatedBrand = await BrandService.getBrandById(id);
            res.status(200).json(updatedBrand);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteBrand(req, res) {
        try {
            const { id } = req.params;
            const deleted = await BrandService.deleteBrand(id);
            if (!deleted) {
                return res.status(404).json({ message: 'Brand not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = new BrandController();