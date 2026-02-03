const BrandImageRespository = require('../repository/brandImage.repository');

class BrandImageService{
    async createBrandImage(brandImage){
        return await BrandImageRespository.createBrandImage(brandImage);
    }

}

module.exports = new BrandImageService();