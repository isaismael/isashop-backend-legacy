const collectionsRepository = require("../repository/collection.repository");

class CollectionsService {
  async getAll(query = {}) {
    const { active } = query;
    const filters = {};
    if (active !== undefined) filters.active = Number(active);
    return await collectionsRepository.findAll(filters);
  }

  async getById(id) {
    const collection = await collectionsRepository.findById(id);
    if (!collection) throw { status: 404, message: "Collection not found" };
    return collection;
  }

  async getWithProducts(id) {
    const collection = await collectionsRepository.findWithProducts(id);
    if (!collection) throw { status: 404, message: "Collection not found" };
    return collection;
  }

  async create(data) {
    const { name, description, active } = data;
    if (!name || !description) {
      throw { status: 400, message: "Name and description are required" };
    }
    return await collectionsRepository.create({ name, description, active });
  }

  async update(id, data) {
    await this.getById(id);
    const affectedRows = await collectionsRepository.update(id, data);
    if (!affectedRows) throw { status: 400, message: "No changes were made" };
    return await collectionsRepository.findById(id);
  }

  async delete(id) {
    await this.getById(id);
    return await collectionsRepository.delete(id);
  }

  async addProduct(collection_id, product_id) {
    await this.getById(collection_id);

    const existing = await collectionsRepository.findCollectionProduct(
      collection_id,
      product_id
    );
    if (existing) {
      throw { status: 409, message: "Product already in collection" };
    }

    return await collectionsRepository.addProduct(collection_id, product_id);
  }

  async removeProduct(collection_id, product_id) {
    const existing = await collectionsRepository.findCollectionProduct(
      collection_id,
      product_id
    );
    if (!existing) {
      throw { status: 404, message: "Product not found in collection" };
    }

    return await collectionsRepository.removeProduct(collection_id, product_id);
  }

  async getProductsByCollection(collection_id) {
    await this.getById(collection_id);
    return await collectionsRepository.getProductsByCollection(collection_id);
  }

  // -> public
  async getByIdPublic(id){
    const collection = await collectionsRepository.findByIdPublic(id);
    return collection;
  }

}

module.exports = new CollectionsService();