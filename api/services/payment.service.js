const paymentMethodRepository = require("../repository/payment.repository");

class PaymentMethodService {
  // -> crear un metodo de pago
  async createPaymentMethod(paymentMethod) {
    return await paymentMethodRepository.createPaymentMethod(paymentMethod);
  }

  // -> traer metodos de pago sin paginacion
  async getAllPaymentMethods() {
    return await paymentMethodRepository.getAllPaymentMethods();
  }

  // -> traer metodos de pago con paginacion
  async getPaymentMethods(page = 1, limit = 10) {
    return await paymentMethodRepository.getPaymentMethods(page, limit);
  }

  // -> traer un metodo de pago por id
  async getPaymentMethodById(id) {
    return await paymentMethodRepository.getPaymentMethodById(id);
  }

  // -> actualizar un metodo de pago por id
  async updatePaymentMethod(id, paymentMethod) {
    return await paymentMethodRepository.updatePaymentMethod(id, paymentMethod);
  }

  // -> activar o desactivar un metodo de pago por id
  async toggleActive(id) {
    const updated = await paymentMethodRepository.toggleActive(id);
    if (!updated) throw new Error(`PaymentMethod with id ${id} not found`);
    return updated;
  }

  // -> solo los activos porque será publico
  async getActivePaymentMethods() {
    return await paymentMethodRepository.getActivePaymentMethods();
  }
}

module.exports = new PaymentMethodService();
