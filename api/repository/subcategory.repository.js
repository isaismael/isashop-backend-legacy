const Subcategory = require('../models/subcategory.model');

class SubcategoryRepository{
    async getAllSubCategories() {
        return await Subcategory.findAll();
    }

    async getSubCategoryById(id) {
        return await Subcategory.findByPk(id);
    }

    async createSubCategory(subcategory) {
        return await Subcategory.create(subcategory);
    }

    async updateSubCategory(id, subcategory) {
        return await Subcategory.update(subcategory, {
            where: { id: id },
        });
    }

    async deleteSubCategory(id) {
        return await Subcategory.destroy({
            where: { id: id },
        });
    }

}

module.exports = new SubcategoryRepository();