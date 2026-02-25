const CategoryBubblesRepository = require("../repository/categoryBubbles.repository");

class CategoryBubblesService {
  // crear CategoryBubbles
  async createCategoryBubbles(categoryBubbles) {
    return await CategoryBubblesRepository.createCategoryBubbles(
      categoryBubbles,
    );
  }

  // traer todas las CategoryBubbles
  async getAllCategoryBubbles() {
    return await CategoryBubblesRepository.getAllCategoryBubbles();
  }

  // update de CategoryBubbles
  async updateCategoryBubbles(id, categoryBubbles) {
    return await CategoryBubblesRepository.updateCategoryBubbles(
      id,
      categoryBubbles,
    );
  }
}

module.exports = new CategoryBubblesService();
