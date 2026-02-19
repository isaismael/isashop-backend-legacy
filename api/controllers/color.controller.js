const ColorService = require("../services/color.service");

class ColorController {
  async getAllColors(req, res) {
    try {
      const colors = await ColorService.getAllColors();
      res.status(200).json(colors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getColors(req, res) {
    try {
      const page = parseInt(req.params.page) || 1;
      const limit = parseInt(req.params.limit) || 10;
      const colors = await ColorService.getColors(page, limit);
      res.status(200).json(colors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getColorById(req, res) {
    try {
      const { id } = req.params;
      const color = await ColorService.getColorById(id);
      if (!color) {
        return res.status(404).json({ message: "Color not found" });
      }
      res.status(200).json(color);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createColor(req, res) {
    try {
      const color = await ColorService.createColor(req.body);
      res.status(201).json(color);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateColor(req, res) {
    try {
      const { id } = req.params;
      const [updated] = await ColorService.updateColor(id, req.body);
      if (!updated) {
        return res.status(404).json({ message: "Color not found" });
      }
      const updatedColor = await ColorService.getColorById(id);
      res.status(200).json(updatedColor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteColor(req, res) {
    try {
      const { id } = req.params;
      const deleted = await ColorService.deleteColor(id);
      if (!deleted) {
        return res.status(404).json({ message: "Color not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ColorController();
