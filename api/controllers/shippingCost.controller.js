const ShippingCostService = require('../services/shippingCost.service');

class ShippingCostController {

    async getAllShippingCosts(req, res) {
        try {
            const shippingCosts = await ShippingCostService.getAllShippingCosts();
            res.status(200).json(shippingCosts);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getShippingCosts(req, res) {
        try {
            const page = parseInt(req.params.page) || 1;
            const limit = parseInt(req.params.limit) || 10;
            const shippingCosts = await ShippingCostService.getShippingCosts(page, limit);
            res.status(200).json(shippingCosts);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getShippingCostsPublic(req, res) {
        try {
            const shippingCosts = await ShippingCostService.getShippingCostsPublic();
            res.status(200).json(shippingCosts);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getShippingCostById(req, res) {
        try {
            const { id } = req.params;
            const shippingCost = await ShippingCostService.getShippingCostById(id);
            if (!shippingCost) {
                return res.status(404).json({ message: 'Shipping cost not found' });
            }
            res.status(200).json(shippingCost);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createShippingCost(req, res) {
        try {
            const shippingCost = await ShippingCostService.createShippingCost(req.body);
            res.status(201).json(shippingCost);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateShippingCost(req, res) {
        try {
            const { id } = req.params;
            const shippingCost = await ShippingCostService.updateShippingCost(id, req.body);
            if (!shippingCost) {
                res.status(404).json({ message: 'Shipping cost not found' });
            }
            res.status(200).json(shippingCost);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = new ShippingCostController();