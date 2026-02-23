const { Province, ShippingCost } = require("../models");

class ProvinceRepository {
  async getAllProvinces() {
    return await Province.findAll({
      include: [{ model: ShippingCost, as: "shipping_costs" }],
    });
  }

  async getProvinces(page = 1, limit = 10) {
    const offset = (page - 1) * limit;
    const provinces = await Province.findAll({
      offset,
      limit,
      include: [{ model: ShippingCost, as: "shipping_costs" }],
    });
    const total = await Province.count();
    return {
      data: provinces,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getProvincesPublic() {
    return await Province.findAll({
      where: { active: 1 },
      include: [{ model: ShippingCost, as: "shipping_costs" }],
    });
  }

  async getProvinceById(id) {
    return await Province.findByPk(id, {
      include: [{ model: ShippingCost, as: "shipping_costs" }],
    });
  }

  async createProvince(province) {
    return await Province.create(province);
  }

  async updateProvince(id, province) {
    const [updated] = await Province.update(province, {
      where: { id },
    });

    if (!updated) {
      throw new Error("Province not found");
    }

    return await this.getProvinceById(id);
  }
}

module.exports = new ProvinceRepository();
