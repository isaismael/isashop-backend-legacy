const ProvinceService = require("../services/province.service");

class ProvinceController {
  async getAllProvinces(req, res) {
    try {
      const provinces = await ProvinceService.getAllProvinces();
      res.status(200).json(provinces);
    } catch (error) {
      res;
    }
  }

  async getProvinces(req, res) {
    try {
      const page = parseInt(req.params.page) || 1;
      const limit = parseInt(req.params.limit) || 10;
      const provinces = await ProvinceService.getProvinces(page, limit);
      res.status(200).json(provinces);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getProvincesPublic(req, res) {
    try {
      const provinces = await ProvinceService.getProvincesPublic();
      res.status(200).json(provinces);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getProvinceById(req, res) {
    try {
      const { id } = req.params;
      const province = await ProvinceService.getProvinceById(id);
      if (!province) {
        return res.status(404).json({ message: "Province not found" });
      }
      res.status(200).json(province);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createProvince(req, res) {
    try {
      const province = await ProvinceService.createProvince(req.body);
      res.status(201).json(province);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateProvince(req, res) {
    try {
      const { id } = req.params;

      const updatedProvince = await ProvinceService.updateProvince(
        id,
        req.body,
      );

      res.status(200).json(updatedProvince);
    } catch (error) {
      if (error.message === "Province not found") {
        return res.status(404).json({ message: error.message });
      }

      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ProvinceController();
