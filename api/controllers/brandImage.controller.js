const BrandImageService = require('../services/brandImage.service');

class BrandImageController{
    async createBrandImage(req, res){
        try {
            const brandImage = await BrandImageService.createBrandImage(req.body);
            res.status(201).json(brandImage);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new BrandImageController();