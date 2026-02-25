const { CategoryBubbles } = require("../models");

class CategoryBubblesRepository {

  // crear CategoryBubbles
  async createCategoryBubbles(categoryBubbles) {
    return await CategoryBubbles.create(categoryBubbles);
  }

  // traer todas las CategoryBubbles
  async getAllCategoryBubbles() {
    return await CategoryBubbles.findAll();
  }

  // update de CategoryBubbles
  async updateCategoryBubbles(id, categoryBubbles) {
    return await CategoryBubbles.update(categoryBubbles, {
      where: { id: id },
    });
  }
  
}

module.exports = new CategoryBubblesRepository