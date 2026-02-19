const Size = require('../models/size.model');

class SizeRepository{
    async getSizes(page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        const sizes = await Size.findAll({
            offset,
            limit,
        });
        const total = await Size.count();
        return {
            data: sizes,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        }
    }

    async getAllSizes() {
        return await Size.findAll({
            where: { active: 1 },
        });
    }

    async getSizeById(id) {
        return await Size.findByPk(id);
    }

    async createSize(size) {
        return await Size.create(size);
    }

    async updateSize(id, size) {
        return await Size.update(size, {
            where: { id: id },
        });
    }

    async deleteSize(id) {
        return await Size.destroy({
            where: { id: id },
        });
    }

}

module.exports = new SizeRepository();