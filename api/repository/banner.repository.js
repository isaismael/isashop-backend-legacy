const { Banner } = require("../models");

class BannerRepository {

  // -> traer el banner, solo hay un solo banner
  async getBanner() {
    return await Banner.findOne({
      where: { active: 1 },
    });
  }
  // -> actualizar el banner
  async updateBanner(id, banner){
    return await Banner.update(banner, {
      where: { id: id },
    });
  }

}

module.exports = new BannerRepository();