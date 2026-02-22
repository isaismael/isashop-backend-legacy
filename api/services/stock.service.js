const StockRepository = require('../repository/stock.repository');

class StockService{
    async createStock(stock) {
        return await StockRepository.createStock(stock);
    }
    
    async getAllStocks() {
        return await StockRepository.getAllStocks();
    }

    async getStocks(page = 1, limit = 10){
        return await StockRepository.getStocks(page, limit);
    }

    async getStockById(id) {
        return await StockRepository.getStockById(id);
    }


    async updateStock(id, stock) {
        return await StockRepository.updateStock(id, stock);
    }

    async deleteStock(id) {
        return await StockRepository.deleteStock(id);
    }

}

module.exports = new StockService();