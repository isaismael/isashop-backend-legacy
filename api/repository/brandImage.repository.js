const { Brand, BrandImage } = require('../models/index');

class BrandImageRespository{
    
    async createBrandImage(brandImage){
        return await BrandImage.create(brandImage);
    }

}

module.exports = new BrandImageRespository();