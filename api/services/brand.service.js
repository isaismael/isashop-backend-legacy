const BandRepository = require('../repository/brand.repository');

class BandController{
    async getAllBrands() {
        return await BandRepository.getAllBrands();
    }

    async getBrandById(id) {
        return await BandRepository.getBrandById(id);
    }

    async createBrand(brand) {
        return await BandRepository.createBrand(brand);
    }

    async updateBrand(id, brand) {
        return await BandRepository.updateBrand(id, brand);
    }

    async deleteBrand(id) {
        return await BandRepository.deleteBrand(id);
    }
}

module.exports = new BandController();