const CategoryBubblesService = require("../services/categoryBubbles.service");

class CategoryBubblesController {
  // crear CategoryBubbles
  async createCategoryBubbles(req, res){
    try {
        const categoryBubbles = await CategoryBubblesService.createCategoryBubbles(req.body);
        res.status(201).json(categoryBubbles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }
  // traer todas las CategoryBubbles
  async getAllCategoryBubbles(req, res){
    try {
        const categoryBubbles = await CategoryBubblesService.getAllCategoryBubbles();
        res.status(200).json(categoryBubbles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }

  // update de CategoryBubbles
  async updateCategoryBubbles(req, res){
    try {
        const { id } = req.params;
        const categoryBubbles = await CategoryBubblesService.updateCategoryBubbles(id, req.body);
        res.status(200).json(categoryBubbles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }

}

module.exports = new CategoryBubblesController();
