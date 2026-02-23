const ShippingCostRepository = require('../repository/shippingCost.repository');

class ShippingCostService {

    async getAllShippingCosts() {
        return await ShippingCostRepository.getAllShippingCosts();
    }

    async getShippingCosts(page = 1, limit = 10) {
        return await ShippingCostRepository.getShippingCosts(page, limit);
    }

    async getShippingCostsPublic() {
        return await ShippingCostRepository.getShippingCostsPublic();
    }

    async getShippingCostById(id) {
        return await ShippingCostRepository.getShippingCostById(id);
    }

    async createShippingCost(shippingCost) {
        return await ShippingCostRepository.createShippingCost(shippingCost);
    }

    async updateShippingCost(id, shippingCost) {
        return await ShippingCostRepository.updateShippingCost(id, shippingCost);
    }


}

module.exports = new ShippingCostService();