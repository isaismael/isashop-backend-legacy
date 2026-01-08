const WarehouseService = require('../services/warehouse.service');

class WarehouseController{
    async getAllWarehouses(req, res) {
        try {
            const warehouses = await WarehouseService.getAllWarehouses();
            res.status(200).json(warehouses);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getWarehouseById(req, res) {
        try {
            const { id } = req.params;
            const warehouse = await WarehouseService.getWarehouseById(id);
            if (!warehouse) {
                return res.status(404).json({ message: 'Warehouse not found' });
            }
            res.status(200).json(warehouse);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createWarehouse(req, res) {
        try {
            const warehouse = await WarehouseService.createWarehouse(req.body);
            res.status(201).json(warehouse);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateWarehouse(req, res) {
        try {
            const { id } = req.params;
            const updatedWarehouse = await WarehouseService.updateWarehouse(id, req.body);
            if (!updatedWarehouse) {
                return res.status(404).json({ message: 'Warehouse not found' });
            }
            res.status(200).json(updatedWarehouse);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteWarehouse(req, res) {
        try {
            const { id } = req.params;
            const deleted = await WarehouseService.deleteWarehouse(id);
            if (!deleted) {
                return res.status(404).json({ message: 'Warehouse not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new WarehouseController();