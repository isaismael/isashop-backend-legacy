const Color = require('../models/color.model');

class ColorRepository{
    async getAllColors() {
        return await Color.findAll();
    }

    async getColors(page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        const colors = await Color.findAll({
            offset,
            limit,
        });
        const total = await Color.count();
        return {
            data: colors,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        }
    }

    async getColorById(id) {
        return await Color.findByPk(id);
    }

    async createColor(color) {
        return await Color.create(color);
    }

    async updateColor(id, color) {
        return await Color.update(color, {
            where: { id: id },
        });
    }

    async deleteColor(id) {
        return await Color.destroy({
            where: { id: id },
        });
    }

}

module.exports = new ColorRepository();