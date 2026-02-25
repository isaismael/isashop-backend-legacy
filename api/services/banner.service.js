const BannerRepository = require('../repository/banner.repository');

class BannerService{

    async getBanner(){
        return await BannerRepository.getBanner();
    }

    async updateBanner(id, data){
        return await BannerRepository.updateBanner(id, data);
    }

}

module.exports = new BannerService();