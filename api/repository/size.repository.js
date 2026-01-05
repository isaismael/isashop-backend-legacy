const Size = require('../models/size.model');

class SizeRepository{
    async getAllSizes() {
        return await Size.findAll();
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