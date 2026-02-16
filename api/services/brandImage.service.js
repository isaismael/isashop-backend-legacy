const BrandImageRespository = require("../repository/brandImage.repository");

class BrandImageService {
  async createBrandImage(brandImage) {
    return await BrandImageRespository.createBrandImage(brandImage);
  }

  async getBrandImageById(id) {
    return await BrandImageRespository.getBrandImageById(id);
  }

  async updateBrandImageById(id, brandImage) {
    return await BrandImageRespository.updateBrandImageById(id, brandImage);
  }
}

module.exports = new BrandImageService();
