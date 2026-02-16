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

      const brandImage =
        await BrandImageService.createBrandImage(brandimageData);
      res.status(201).json(brandImage);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getBrandImageById(req, res) {
    try {
      const brandImage = await BrandImageService.getBrandImageById(
        req.params.id,
      );
      if (!brandImage) {
        return res.status(404).json({ error: "Imagen de marca no encontrada" });
      }
      res.json(brandImage);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateBrandImageById(req, res) {
    try {
      const imageId = req.params.id;

      const existingImage = await BrandImageService.getBrandImageById(imageId);
      if (!existingImage) {
        return res.status(404).json({
          error: "Imagen de la marca no encontrada",
        });
      }

      let updatedData = {};

      if (req.file) {
        updatedData.url = `/uploads/brands/${req.file.filename}`;
      }

      if (req.body.alt) {
        updatedData.alt = req.body.alt;
      }

      await BrandImageService.updateBrandImageById(imageId, updatedData);

      res.json({ message: "Imagen actualizada correctamente" });
    } catch (error) {
      return res.status(500).json({
        error: "Error actualizando imagen",
        details: error.message,
      });
    }
  }
}

module.exports = new BrandImageController();
