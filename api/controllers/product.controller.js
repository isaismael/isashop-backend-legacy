const ProductService = require("../services/product.service");

class ProductController {
  async getAllProducts(req, res) {
    try {
      const {
        page = 1,
        limit = 10,
        search = "",
        departmentId,
        categoryId,
        subcategoryId,
        brand_id,
        orderBy = "createdAt",
        orderDir = "DESC",
      } = req.query;

      const products = await ProductService.getAllProducts({
        page: parseInt(page),
        limit: parseInt(limit),
        search,
        departmentId,
        categoryId,
        subcategoryId,
        brand_id,
        orderBy,
        orderDir,
      });

      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllProductsPublic(req, res) {
    try {
      const {
        page = 1,
        limit = 10,
        search = "",
        departmentId,
        categoryId,
        subcategoryId,
        brand_id,
        orderBy = "createdAt",
        orderDir = "DESC",
      } = req.query;

      const products = await ProductService.getAllProductsPublic({
        page: parseInt(page),
        limit: parseInt(limit),
        search,
        departmentId,
        categoryId,
        subcategoryId,
        brand_id,
        orderBy,
        orderDir,
      });

      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getProductById(req, res) {
    try {
      const { id } = req.params;
      const product = await ProductService.getProductById(id);

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

    async getProductByIdPublic(req, res) {
    try {
      const { id } = req.params;
      const product = await ProductService.getProductByIdPublic(id);

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createProduct(req, res) {
    try {
      const product = await ProductService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const updatedProduct = await ProductService.updateProduct(
        id,
        req.body
      );

      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      await ProductService.deleteProduct(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ProductController();