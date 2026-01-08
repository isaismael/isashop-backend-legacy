const { Warehouse, Stock, ProductVariation } = require('../models');


class WarehouseRepository{
    async getAllWarehouses() {
        return await Warehouse.findAll({
            where: { active: 1 },
            include: [
                { model: Stock, as: 'stocks' },
            ]
        });
    }

    async getWarehouseById(id) {
        const warehouse = await Warehouse.findByPk(id, {
            include: [
                { model: Stock, as: 'stocks' }
            ]
        });

        if (!warehouse) throw new Error('Warehouse not found');
        return warehouse;
    }

    async createWarehouse(warehouse) {
        return await Warehouse.create(warehouse);
    }

    async updateWarehouse(id, warehouse) {
        await Warehouse.update(warehouse, { where: { id } });
        return this.getWarehouseById(id);
    }

    async deleteWarehouse(id) {
        return await Warehouse.update(
            { active: 0 },
            { where: { id } }
        );
    }

}

module.exports = new WarehouseRepository();