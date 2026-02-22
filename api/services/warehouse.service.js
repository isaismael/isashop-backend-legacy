const WarehouseRepository = require('../repository/warehouse.repository');

class WarehouseService{
    async getAllWarehouses() {
        return await WarehouseRepository.getAllWarehouses();
    }

    async getWarehouses(page = 1, limit = 10){
        return await WarehouseRepository.getWarehouses(page, limit);
    }

    async getWarehouseById(id) {
        return await WarehouseRepository.getWarehouseById(id);
    }

    async createWarehouse(warehouse) {
        return await WarehouseRepository.createWarehouse(warehouse);
    }

        async updateWarehouse(id, warehouse) {
            return await WarehouseRepository.updateWarehouse(id, warehouse);
        }

    async deleteWarehouse(id) {
        return await WarehouseRepository.deleteWarehouse(id);
    }

}

module.exports = new WarehouseService();