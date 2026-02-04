const { Brand, BrandImage } = require('../models')

class BandRepository {

    async getAllBrands(page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        const brands = await Brand.findAll({
            offset,
            limit,
            include: [
                { model: BrandImage, as: 'images' }
            ]
        });
        const total = await Brand.count();
        return {
            data: brands,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        }
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