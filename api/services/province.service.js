const ProvinceRepository = require("../repository/province.repository");

class ProvinceService {
  async getAllProvinces() {
    return await ProvinceRepository.getAllProvinces();
  }

  async getProvinces(page = 1, limit = 10) {
    return await ProvinceRepository.getProvinces(page, limit);
  }

  async getProvincesPublic() {
    return await ProvinceRepository.getProvincesPublic();
  }

  async getProvinceById(id) {
    return await ProvinceRepository.getProvinceById(id);
  }

  async createProvince(province) {
    return await ProvinceRepository.createProvince(province);
  }

  async updateProvince(id, province) {
    return await ProvinceRepository.updateProvince(id, province);
  }
}

module.exports = new ProvinceService();
