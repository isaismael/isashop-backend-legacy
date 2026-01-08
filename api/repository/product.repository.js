const {
  Product,
  ProductVariation,
  ProductImage,
  Brand,
  SubCategory,
} = require("../models");

class ProductRepository {
  async getAllProducts() {
    return await Product.findAll({
      where: { active: 1 },
      include: [
        { model: Brand, as: "brand" },
        { model: SubCategory, as: "subcategory" },
        { model: ProductVariation, as: "product_variations" },
        { model: ProductImage, as: "product_images" },
      ],
    });
  }

  async getProductById(id) {
    const product = await Product.findByPk(id, {
      include: [
        { model: Brand, as: "brand" },
        { model: SubCategory, as: "subcategory" },
      ],
    });

    if (!product) throw new Error("Product not found");
    return product;
  }

  async createProduct(product) {
    return await Product.create(product);
  }

  async updateProduct(id, product) {
    await Product.update(product, { where: { id } });
    return this.getProductById(id);
  }

  async deleteProduct(id) {
    return await Product.update({ active: 0 }, { where: { id } });
  }
}

module.exports = new ProductRepository();
