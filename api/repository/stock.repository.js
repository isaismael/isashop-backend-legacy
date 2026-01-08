const { Stock, Warehouse, ProductVariation } = require('../models');


class StockRepository{
    async getAllStocks() {
        return await Stock.findAll({
            include: [
                { model: Warehouse, as: 'warehouse' },
                { model: ProductVariation, as: 'product_variation' }
            ]
        });
    }

    async getStockById(id) {
        const stock = await Stock.findByPk(id, {
            include: [
                { model: Warehouse, as: 'warehouse' },
                { model: ProductVariation, as: 'product_variation' }
            ]
        });

        if (!stock) throw new Error('Stock not found');
        return stock;
    }

    async createStock(stock) {
        return await Stock.create(stock);
    }

    async updateStock(id, stock) {
        await Stock.update(stock, { where: { id } });
        return this.getStockById(id);
    }

    async deleteStock(id) {
        return await Stock.destroy({ where: { id } });
    }

}

module.exports = new StockRepository();