const Brand = require('../models/brand.model')

class BandRepository{
    async getAllBrands() {
        return await Brand.findAll();
    }

    async getBrandById(id) {
        return await Brand.findByPk(id);
    }

    async createBrand(brand) {
        return await Brand.create(brand);
    }

    async updateBrand(id, brand) {
        return await Brand.update(brand, {
            where: { id: id },
        });
    }

    async deleteBrand(id) {
        return await Brand.destroy({
            where: { id: id },
        });
    }

}

module.exports = new BandRepository();