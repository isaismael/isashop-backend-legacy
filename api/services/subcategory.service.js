const SubcategoryRepository = require('../repository/subcategory.repository');

class SubcategoryService{
    async getAllSubCategories() {
        return await SubcategoryRepository.getAllSubCategories();
    }

    async getSubCategoryById(id) {
        return await SubcategoryRepository.getSubCategoryById(id);
    }

    async createSubCategory(subcategory) {
        return await SubcategoryRepository.createSubCategory(subcategory);
    }

    async updateSubCategory(id, subcategory) {
        return await SubcategoryRepository.updateSubCategory(id, subcategory);
    }

    async deleteSubCategory(id) {
        return await SubcategoryRepository.deleteSubCategory(id);
    }

}

module.exports = new SubcategoryService();