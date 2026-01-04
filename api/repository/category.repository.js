const Category = require('../models/category.model');

class CategoryRepository{
    async getAllCategories() {
        return await Category.findAll();
    }

    async getCategoryById(id) {
        return await Category.findByPk(id);
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