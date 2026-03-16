const { Customer } = require("../models");
const bcrypt = require("bcrypt");

class CustomerRepository {
  async getCustomerById(id) {
    return await Customer.findByPk(id, {
      attributes: { exclude: ["password"] },
    });
  }

  async updateCustomer(id, data) {
    // Si viene nueva contraseña, hashearla
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    } else {
      delete data.password;
    }
    await Customer.update(data, { where: { id } });
    return this.getCustomerById(id);
  }

  //-> listado de customer con paginacion
  async getCustomers(page = 1, limit = 10){
    const offset = (page - 1) * limit;
    const customers = await Customer.findAll({
      offset,
      limit,
      attributes: { exclude: ["password"] },
    });
    const total = await Customer.count();
    return {
      data: customers,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    }
  }

}

module.exports = new CustomerRepository();