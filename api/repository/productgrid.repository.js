const { ProductGrid } = require("../models");

class ProductGridRepository{
    async createProductGrid(productGrid){
        return await ProductGrid.create(productGrid);
    }

    async getAllProductGrids(){
        return await ProductGrid.findAll();
    }

    async getProductGridById(id){
        return await ProductGrid.findByPk(id);
    }

    async updateProductGrid(id, productGrid){
        return await ProductGrid.update(productGrid, {
            where: { id: id }
        });
    }

    // -> ruta publica para el store
    async getProductGridByIdPublic(id){
        return await ProductGrid.findByPk(id, {
            where: { active: 1 }
        });
    }


}

module.exports = new ProductGridRepository();