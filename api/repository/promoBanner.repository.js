const { PromoBanner } = require('../models');

class PromoBannerRepository{
    // crear PromoBanner
    async createPromoBanner(promoBanner){
        return await PromoBanner.create(promoBanner);
    }
    
    // get PromoBanner
    async getPromoBanner(){
        return await PromoBanner.findOne({
            where: { active: 1 }
        });
    }
    
    // update PromoBanner
    async updatePromoBanner(id, promoBanner){
        return await PromoBanner.update(promoBanner, {
            where: { id: id }
        });
    }

    // ruta publica para el store
    async getPromoBannerPublic(){
        return await PromoBanner.findOne({
            where: { active: 1 }
        });
    }
}

module.exports = new PromoBannerRepository();