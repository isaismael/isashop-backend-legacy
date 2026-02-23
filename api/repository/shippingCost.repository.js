const { Province, ShippingCost } = require("../models");

class ShippingCostRepository {

    async getAllShippingCosts() {
        return await ShippingCost.findAll({
            include: [{
                model: Province,
                as: 'province'
            }]
        })
    }

    async getShippingCosts(page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        const shippingCosts = await ShippingCost.findAll({
            offset,
            limit,
            include: [{
                model: Province,
                as: 'province'
            }]
        });
        const total = await ShippingCost.count();
        return {
            data: shippingCosts,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        }
    }

    async getShippingCostsPublic() {
        return await ShippingCost.findAll({
            where: { active: 1 },
            include: [{
                model: Province,
                as: 'province'
            }]
        })
    }

    async getShippingCostById(id) {
        return await ShippingCost.findByPk(id, {
            include: [{
                model: Province,
                as: 'province'
            }]
        })
    }

    async createShippingCost(shippingCost) {
        return await ShippingCost.create(shippingCost);
    }

    async updateShippingCost(id, shippingCost) {
        await ShippingCost.update(shippingCost, {
            where: { id: id }
        });
        return this.getShippingCostById(id);
    }

}

module.exports = new ShippingCostRepository();