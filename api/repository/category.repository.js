const { Category, Department, Subcategory } = require("../models");

class CategoryRepository {
  
  async getAllCategories() {
    return await Category.findAll({
      include: [
        { model: Department, as: "department" }
      ],
    });
  }

  async getCategoryById(id) {
    return await Category.findByPk(id,{
      where: { id: id },
      include: [
        { model: Department, as: "department" }
      ],
    });
  }

  async createCategory(category) {
    return await Category.create(category);
  }

  async updateCategory(id, category) {
    return await Category.update(category, {
      where: { id: id },
    });
  }

  async deleteCategory(id) {
    return await Category.destroy({
      where: { id: id },
    });
  }
}

module.exports = new CategoryRepository();
