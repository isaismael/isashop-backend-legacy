const StockService = require('../services/stock.service');

class StockController{
    async getAllStocks(req, res) {
        try {
            const stocks = await StockService.getAllStocks();
            res.status(200).json(stocks);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getStockById(req, res) {
        try {
            const { id } = req.params;
            const stock = await StockService.getStockById(id);
            if (!stock) {
                return res.status(404).json({ message: 'Stock not found' });
            }
            res.status(200).json(stock);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createStock(req, res) {
        try {
            const stock = await StockService.createStock(req.body);
            res.status(201).json(stock);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateStock(req, res) {
        try {
            const { id } = req.params;
            const updatedStock = await StockService.updateStock(id, req.body);
            if (!updatedStock) {
                return res.status(404).json({ message: 'Stock not found' });
            }
            res.status(200).json(updatedStock);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteStock(req, res) {
        try {
            const { id } = req.params;
            const deleted = await StockService.deleteStock(id);
            if (!deleted) {
                return res.status(404).json({ message: 'Stock not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = new StockController();