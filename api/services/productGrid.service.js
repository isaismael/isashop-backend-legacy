const ProductGridRepository = require("../repository/productgrid.repository");

class ProductGridService {
  // createProductGrid
  async createProductGrid(productGrid) {
    return await ProductGridRepository.createProductGrid(productGrid);
  }

  // getAllProductGrids
  async getAllProductGrids() {
    return await ProductGridRepository.getAllProductGrids();
  }

  // getProductGridById
  async getProductGridById(id) {
    return await ProductGridRepository.getProductGridById(id);
  }

  // updateProductGrid
  async updateProductGrid(id, productGrid) {
    return await ProductGridRepository.updateProductGrid(id, productGrid);
  }

  // getProductGridByIdPublic
  async getProductGridByIdPublic(id) {
    return await ProductGridRepository.getProductGridByIdPublic(id);
  }
}

module.exports = new ProductGridService();
