const BannerService = require('../services/banner.service');

class BannerController{

    // getBanner
    async getBanner(req, res){
        try {
            const banner = await BannerService.getBanner();
            res.status(200).json(banner);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // updateBanner
    async updateBanner(req, res){
        try {
            const { id } = req.params;
            const banner = await BannerService.updateBanner(id, req.body);
            res.status(200).json(banner);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = new BannerController();