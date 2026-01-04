const SubcategoryService = require("../services/subcategory.service");

class SubcategoryController {
  async getAllSubCategories(req, res) {
    try {
      const subcategories = await SubcategoryService.getAllSubCategories();
      res.status(200).json(subcategories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getSubCategoryById(req, res) {
    try {
      const { id } = req.params;
      const subcategory = await SubcategoryService.getSubCategoryById(id);
      if (!subcategory) {
        return res.status(404).json({ message: "Subcategory not found" });
      }
      res.status(200).json(subcategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createSubCategory(req, res) {
    try {
      const subcategory = await SubcategoryService.createSubCategory(req.body);
      res.status(201).json(subcategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateSubCategory(req, res) {
    try {
      const { id } = req.params;
      const [updated] = await SubcategoryService.updateSubCategory(
        id,
        req.body
      );
      if (!updated) {
        return res.status(404).json({ message: "Subcategory not found" });
      }
      const updatedSubCategory = await SubcategoryService.getSubCategoryById(
        id
      );
      res.status(200).json(updatedSubCategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteSubCategory(req, res) {
    try {
      const { id } = req.params;
      const deleted = await SubcategoryService.deleteSubCategory(id);
      if (!deleted) {
        return res.status(404).json({ message: "Subcategory not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new SubcategoryController();
