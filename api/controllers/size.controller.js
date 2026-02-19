const SizeService = require('../services/size.service');

class SizeController{

    async getSizes(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        try {
            const sizes = await SizeService.getSizes(page, limit);
            res.status(200).json(sizes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAllSizes(req, res){
        try {
            const sizes = await SizeService.getAllSizes();
            res.status(200).json(sizes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getSizeById(req, res) {
        try {
            const { id } = req.params;
            const size = await SizeService.getSizeById(id);
            if (!size) {
                return res.status(404).json({ message: 'Size not found' });
            }
            res.status(200).json(size);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createSize(req, res) {
        try {
            const size = await SizeService.createSize(req.body);
            res.status(201).json(size);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateSize(req, res) {
        try {
            const { id } = req.params;
            const [updated] = await SizeService.updateSize(id, req.body);
            if (!updated) {
                return res.status(404).json({ message: 'Size not found' });
            }
            const updatedSize = await SizeService.getSizeById(id);
            res.status(200).json(updatedSize);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteSize(req, res) {
        try {
            const { id } = req.params;
            const deleted = await SizeService.deleteSize(id);
            if (!deleted) {
                return res.status(404).json({ message: 'Size not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = new SizeController();