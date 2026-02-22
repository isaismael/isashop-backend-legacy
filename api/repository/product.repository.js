const { Op } = require("sequelize");
const {
  Product,
  ProductVariation,
  ProductImage,
  Brand,
  SubCategory,
  Category,
  Department,
  Stock,
} = require("../models");

class ProductRepository {
  async getAllProducts({
    page = 1,
    limit = 10,
    search = "",
    departmentId = null,
    categoryId = null,
    subcategoryId = null,
    brand_id = null,
    orderBy = "createdAt",
    orderDir = "DESC",
  }) {
    const offset = (page - 1) * limit;

    let where = {};

    if (search) {
      where[Op.or] = [
        { name: { [Op.like]: `%${search}%` } },
        { product_sku: { [Op.like]: `%${search}%` } },
        !isNaN(search) ? { id: Number(search) } : null,
      ].filter(Boolean);
    }

    if (brand_id) {
      where.brand_id = brand_id;
    }

    const { rows: products, count: total } = await Product.findAndCountAll({
      distinct: true, // 🔥 evita duplicados por joins
      where,
      include: [
        { model: Brand, as: "brand" },
        {
          model: SubCategory,
          as: "subcategory",
          required: true,
          where: subcategoryId ? { id: subcategoryId } : undefined,
          include: [
            {
              model: Category,
              as: "category",
              required: categoryId || departmentId ? true : false,
              where: categoryId ? { id: categoryId } : undefined,
              include: [
                {
                  model: Department,
                  as: "department",
                  required: departmentId ? true : false,
                  where: departmentId ? { id: departmentId } : undefined,
                },
              ],
            },
          ],
        },
        {
          model: ProductVariation,
          as: "product_variations",
          include: [
            {
              model: Stock,
              as: "stocks",
            },
          ],
        },
        { model: ProductImage, as: "product_images" },
      ],
      offset,
      limit,
      order: [[orderBy, orderDir]],
    });

    return {
      data: products,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getAllProductsPublic({
    page = 1,
    limit = 10,
    search = "",
    departmentId = null,
    categoryId = null,
    subcategoryId = null,
    brand_id = null,
    orderBy = "createdAt",
    orderDir = "DESC",
  }) {
    const offset = (page - 1) * limit;
    let where = { active: 1 };

    if (search) {
      where[Op.or] = [
        { name: { [Op.like]: `%${search}%` } },
        { product_sku: { [Op.like]: `%${search}%` } },
        !isNaN(search) ? { id: Number(search) } : null,
      ].filter(Boolean);
    }

    if (brand_id) {
      where.brand_id = brand_id;
    }

    const { rows: products, count: total } = await Product.findAndCountAll({
      distinct: true,
      where,
      include: [
        { model: Brand, as: "brand" },
        {
          model: SubCategory,
          as: "subcategory",
          required: true,
          where: subcategoryId ? { id: subcategoryId } : undefined,
          include: [
            {
              model: Category,
              as: "category",
              required: categoryId || departmentId ? true : false,
              where: categoryId ? { id: categoryId } : undefined,
              include: [
                {
                  model: Department,
                  as: "department",
                  required: departmentId ? true : false,
                  where: departmentId ? { id: departmentId } : undefined,
                },
              ],
            },
          ],
        },
        {
          model: ProductVariation,
          as: "product_variations",
          // obliga a que exista al menos 1 variante válida
          required: true, 
          where: { active: 1 },
          include: [
            {
              model: Stock,
              as: "stocks",
              // obliga a que exista stock
              required: true, 
              // 👈 solo stock mayor a 0 || nota great that es gt
              where: {
                quantity: {
                  [Op.gt]: 0, 
                },
              },
            },
          ],
        },
        { model: ProductImage, as: "product_images" },
      ],
      offset,
      limit,
      order: [[orderBy, orderDir]],
    });

    return {
      data: products,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getProductById(id) {
    const product = await Product.findByPk(id, {
      include: [
        { model: Brand, as: "brand" },
        {
          model: SubCategory,
          as: "subcategory",
          include: [
            {
              model: Category,
              as: "category",
              include: [
                {
                  model: Department,
                  as: "department",
                },
              ],
            },
          ],
        },
        { model: ProductVariation, as: "product_variations" },
        { model: ProductImage, as: "product_images" },
      ],
    });

    if (!product) throw new Error("Product not found");
    return product;
  }

  async getProductByIdPublic(id) {
    const product = await Product.findByPk(id, {
      include: [
        { model: Brand, as: "brand" },
        {
          model: SubCategory,
          as: "subcategory",
          include: [
            {
              model: Category,
              as: "category",
              include: [{ model: Department, as: "department" }],
            },
          ],
        },
        {
          model: ProductVariation,
          as: "product_variations",
          // obliga a que exista al menos 1 variante válida
          required: true, 
          where: { active: 1 },
          include: [
            {
              model: Stock,
              as: "stocks",
              // obliga a que exista stock
              required: true, 
              // 👈 solo stock mayor a 0 || nota great that es gt
              where: {
                quantity: {
                  [Op.gt]: 0, 
                },
              },
            },
          ],
        },
        {
          model: ProductImage,
          as: "product_images",
          where: { active: 1 }, // ← agregado
          required: false,
        },
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
