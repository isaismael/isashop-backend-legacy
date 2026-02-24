const { ShippingAdress, Customer } = require("../models");


class ShippingAdressRepository {
  async createShippingAdress(shippingAdress) {
    return await ShippingAdress.create(shippingAdress);
  }

  async getShippingAdressById(id) {
    return await ShippingAdress.findByPk(id);
  }

  // -> con paginacion
  async getShippingAdresses(page = 1, limit = 10) {
    const offset = (page - 1) * limit;
    const shippingAdresses = await ShippingAdress.findAll({
      offset,
      limit,
      include: [
        {
          model: Customer,
          as: "customer",
        },
      ],
    });
    const total = await ShippingAdress.count();
    return {
      data: shippingAdresses,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  // sin paginacion
  async getAllShippingAdresses() {
    return await ShippingAdress.findAll({
      include: [
        {
          model: Customer,
          as: "customer",
        },
      ],
    });
  }

  async updateShippingAdress(id, shippingAdress) {
    await ShippingAdress.update(shippingAdress, {
      where: { id: id },
    });
    return this.getShippingAdressById(id);
  }
}

module.exports = new ShippingAdressRepository();
