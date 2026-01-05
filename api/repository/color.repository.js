const Color = require('../models/color.model');

class ColorRepository{
    async getAllColors() {
        return await Color.findAll();
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