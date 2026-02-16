const { Brand, BrandImage } = require("../models/index");

class BrandImageRespository {
  async createBrandImage(brandImage) {
    return await BrandImage.create(brandImage);
  }

  async getBrandImageById(id) {
    return await BrandImage.findByPk(id);
  }

  async updateBrandImage(id, brandImage) {
    return await BrandImage.update(brandImage, {
      where: { id: id },
    });
  }

  async updateBrandImageById(id, brandImage) {
    return await BrandImage.update(brandImage, {
      where: { id: id },
    });
  }

  async deleteBrandImage(id) {
    return await BrandImage.destroy({
      where: { id: id },
    });
  }
}

module.exports = new BrandImageRespository();
