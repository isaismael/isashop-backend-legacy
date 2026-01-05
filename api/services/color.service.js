const ColorRepository = require('../repository/color.repository');

class ColorService{
    async getAllColors() {
        return await ColorRepository.getAllColors();
    }

    async getColorById(id) {
        return await ColorRepository.getColorById(id);
    }

    async createColor(color) {
        return await ColorRepository.createColor(color);
    }

    async updateColor(id, color) {
        return await ColorRepository.updateColor(id, color);
    }

    async deleteColor(id) {
        return await ColorRepository.deleteColor(id);
    }

}

module.exports = new ColorService();