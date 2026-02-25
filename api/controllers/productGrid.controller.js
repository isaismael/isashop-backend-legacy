const ProductGridService = require("../services/productGrid.service");

class ProductGridController {
  // createProductGrid
  async createProductGrid(req, res) {
    try {
      const productGrid = await ProductGridService.createProductGrid(req.body);
      res.status(201).json(productGrid);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // getAllProductGrids
  async getAllProductGrids(req, res) {
    try {
      const productGrids = await ProductGridService.getAllProductGrids();
      res.status(200).json(productGrids);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // getProductGridById
  async getProductGridById(req, res) {
    try {
      const { id } = req.params;
      const productGrid = await ProductGridService.getProductGridById(id);
      if (!productGrid) {
        return res.status(404).json({ message: "ProductGrid not found" });
      }
      res.status(200).json(productGrid);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // updateProductGrid
  async updateProductGrid(req, res) {
    try {
      const { id } = req.params;
      const productGrid = await ProductGridService.updateProductGrid(
        id,
        req.body,
      );
      if (!productGrid) {
        res.status(404).json({ message: "ProductGrid not found" });
      }
      res.status(200).json(productGrid);
    } catch (error) {}
  }

  // getProductGridByIdPublic
  async getProductGridByIdPublic(req, res) {
    try {
      const response = await ProductGridService.getProductGridByIdPublic(
        req.params.id,
      );
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ProductGridController();
