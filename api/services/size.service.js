const SizeRepository = require('../repository/size.repository');

class SizeService{
    async getSizes(page, limit) {
        return await SizeRepository.getSizes(page, limit);
    }

    async getAllSizes() {
        return await SizeRepository.getAllSizes();
    }

    async getSizeById(id) {
        return await SizeRepository.getSizeById(id);
    }

    async createSize(size) {
        return await SizeRepository.createSize(size);
    }

    async updateSize(id, size) {
        return await SizeRepository.updateSize(id, size);
    }

    async deleteSize(id) {
        return await SizeRepository.deleteSize(id);
    }

}

module.exports = new SizeService();