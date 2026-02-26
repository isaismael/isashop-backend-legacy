const PromoBannerService = require('../services/promoBanner.service');

class PromoBannerController {

    //createPromoBanner
    async createPromoBanner(req, res){
        try {
            const promoBanner = await PromoBannerService.createPromoBanner(req.body);
            res.status(201).json(promoBanner);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // get PromoBanner
    async getPromoBanner(req, res){
        try {
            const promoBanner = await PromoBannerService.getPromoBanner();
            res.status(200).json(promoBanner);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // update PromoBanner
    async updatePromoBanner(req, res){
        try {
            const { id } = req.params;
            const promoBanner = await PromoBannerService.updatePromoBanner(id, req.body);
            if(!promoBanner){
                res.status(404).json({ message: 'PromoBanner not found' });
            }
            res.status(200).json(promoBanner);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


    // ruta publica para el store
    async getPromoBannerPublic(req, res){
        try {
            const promoBanner = await PromoBannerService.getPromoBannerPublic();
            res.status(200).json(promoBanner);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = new PromoBannerController();