const StockRepository = require('../repository/stock.repository');

class StockService{
    async getAllStocks() {
        return await StockRepository.getAllStocks();
    }

    async getStockById(id) {
        return await StockRepository.getStockById(id);
    }

    async createStock(stock) {
        return await StockRepository.createStock(stock);
    }

    async updateStock(id, stock) {
        return await StockRepository.updateStock(id, stock);
    }

    async deleteStock(id) {
        return await StockRepository.deleteStock(id);
    }

}

module.exports = new StockService();