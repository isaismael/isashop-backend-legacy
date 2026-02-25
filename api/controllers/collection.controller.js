const collectionsService = require("../services/collection.service");

class CollectionsController {
  async getAll(req, res) {
    try {
      const collections = await collectionsService.getAll(req.query);
      return res.status(200).json(collections);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ ok: false, message: error.message || "Internal server error" });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const collection = await collectionsService.getById(id);
      return res.status(200).json(collection);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ ok: false, message: error.message || "Internal server error" });
    }
  }

  async getWithProducts(req, res) {
    try {
      const { id } = req.params;
      const collection = await collectionsService.getWithProducts(id);
      return res.status(200).json(collection);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ ok: false, message: error.message || "Internal server error" });
    }
  }

  async create(req, res) {
    try {
      const collection = await collectionsService.create(req.body);
      return res.status(201).json(collection);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ ok: false, message: error.message || "Internal server error" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const collection = await collectionsService.update(id, req.body);
      return res.status(200).json(collection);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ ok: false, message: error.message || "Internal server error" });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await collectionsService.delete(id);
      return res
        .status(200)
        .json({ ok: true, message: "Collection deleted successfully" });
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ ok: false, message: error.message || "Internal server error" });
    }
  }

  async addProduct(req, res) {
    try {
      const { id } = req.params;
      const { product_id } = req.body;
      const result = await collectionsService.addProduct(id, product_id);
      return res.status(201).json(result);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ ok: false, message: error.message || "Internal server error" });
    }
  }

  async removeProduct(req, res) {
    try {
      const { id, product_id } = req.params;
      await collectionsService.removeProduct(id, product_id);
      return res
        .status(200)
        .json({ ok: true, message: "Product removed from collection" });
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ ok: false, message: error.message || "Internal server error" });
    }
  }

  async getProductsByCollection(req, res) {
    try {
      const { id } = req.params;
      const products = await collectionsService.getProductsByCollection(id);
      return res.status(200).json(products);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ ok: false, message: error.message || "Internal server error" });
    }
  }

  //-> publica
  async getByIdPublic(req, res) {
  try {
    const { id } = req.params;
    const collection = await collectionsService.getByIdPublic(id);

    return res.json(collection);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

}

module.exports = new CollectionsController();