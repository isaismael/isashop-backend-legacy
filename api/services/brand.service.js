const BandRepository = require('../repository/brand.repository');

class BandSerice{
    async getAllBrands(page = 1, limit = 10) {
        return await BandRepository.getAllBrands(page, limit);
    }

    async getBrands(){
        return await BandRepository.getBrands();
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

module.exports = new BandSerice();