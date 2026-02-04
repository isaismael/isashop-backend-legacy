const BrandImageService = require("../services/brandImage.service");

class BrandImageController {
  async createBrandImage(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No se subió ninguna imagen" });
      }

      const imageUrl = `/uploads/brands/${req.file.filename}`;

      const brandimageData = {
        brand_id: req.body.brand_id,
        url: imageUrl,
        alt: req.body.alt || null,
      };

      const brandImage = await BrandImageService.createBrandImage(brandimageData);
      res.status(201).json(brandImage);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new BrandImageController();
