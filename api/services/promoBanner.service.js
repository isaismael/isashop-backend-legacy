const PromoBannerRepository = require('../repository/promoBanner.repository');

class PromoBannerService {

    //createPromoBanner
    async createPromoBanner(promoBanner) {
        return await PromoBannerRepository.createPromoBanner(promoBanner);
    }

    // get PromoBanner
    async getPromoBanner() {
        return await PromoBannerRepository.getPromoBanner();
    }

    // update PromoBanner
    async updatePromoBanner(id, promoBanner) {
        return await PromoBannerRepository.updatePromoBanner(id, promoBanner);
    }


    // ruta publica para el store
    async getPromoBannerPublic() {
        return await PromoBannerRepository.getPromoBannerPublic();
    }

}

module.exports = new PromoBannerService();