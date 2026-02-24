const { PaymentMethod } = require("../models");

class PaymentMethodRepository {
  // -> crear un metodo de pago
  async createPaymentMethod(paymentMethod) {
    return await PaymentMethod.create(paymentMethod);
  }

  // -> traer metodos de pago sin paginacion
  async getAllPaymentMethods() {
    return await PaymentMethod.findAll();
  }

  // -> traer metodos de pago con paginacion
  async getPaymentMethods(page = 1, limit = 10) {
    const offset = (page - 1) * limit;
    const paymentMethods = await PaymentMethod.findAll({
      offset,
      limit,
    });
    const total = await PaymentMethod.count();
    return {
      data: paymentMethods,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  // -> traer un metodo de pago por id
  async getPaymentMethodById(id) {
    return await PaymentMethod.findByPk(id);
  }

  // -> actualizar un metodo de pago por id
  async updatePaymentMethod(id, paymentMethod) {
    return await PaymentMethod.update(paymentMethod, {
      where: { id: id },
    });
  }

  // -> activar o desactivar un metodo de pago por id
  async toggleActive(id) {
    const paymentMethod = await PaymentMethod.findByPk(id);
    if (!paymentMethod) return null;
    return await paymentMethod.update({
      active: paymentMethod.active === 1 ? 0 : 1,
    });
  }

  // -> solo los activos porque será publico
  async getActivePaymentMethods() {
    return await PaymentMethod.findAll({
      where: { active: 1 },
    });
  }
}

module.exports = new PaymentMethodRepository();
