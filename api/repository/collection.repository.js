const {
  Collections,
  CollectionProduct,
  Product,
  ProductVariation,
  ProductImage
} = require("../models");
const { Op } = require("sequelize");

class CollectionsRepository {
  async findAll({ active } = {}) {
    const where = {};
    if (active !== undefined) where.active = active;
    return await Collections.findAll({ where });
  }

  async findById(id) {
    return await Collections.findByPk(id);
  }

  async findWithProducts(id) {
    return await Collections.findByPk(id, {
      include: [
        {
          model: Product,
          as: "products", // alias definido en el index.js
          through: { attributes: [] }, // oculta los campos de la tabla intermedia
        },
      ],
    });
  }

  async create(data) {
    return await Collections.create(data);
  }

  async update(id, data) {
    const [affectedRows] = await Collections.update(data, { where: { id } });
    return affectedRows;
  }

  async delete(id) {
    return await Collections.destroy({ where: { id } });
  }

  // CollectionProduct methods
  async addProduct(collection_id, product_id) {
    return await CollectionProduct.create({ collection_id, product_id });
  }

  async removeProduct(collection_id, product_id) {
    return await CollectionProduct.destroy({
      where: { collection_id, product_id },
    });
  }

  async findCollectionProduct(collection_id, product_id) {
    return await CollectionProduct.findOne({
      where: { collection_id, product_id },
    });
  }

  async getProductsByCollection(collection_id) {
    const collection = await Collections.findByPk(collection_id, {
      include: [
        {
          model: Product,
          as: "products",
          through: { attributes: [] },
        },
      ],
    });
    return collection ? collection.products : [];
  }

  // -> publica findByIdPublic
  async findByIdPublic(id) {
    return await Collections.findOne({
      where: { id, active: 1 },
      include: [
        {
          model: Product,
          as: "products",
          through: { attributes: [] },
          include: [
            {
              model: ProductVariation,
              as: "product_variations",
              include: [
                {
                  model: Product,
                  as: "product",
                },
                {
                  model: ProductImage,
                  as: "product_images",
                },
              ],
            },
          ],
        },
      ],
    });
  }
}

module.exports = new CollectionsRepository();
