const paymentMethodService = require("../services/payment.service");

class PaymentMethodController {
  // -> crear un metodo de pago
  async createPaymentMethod(req, res) {
    try {
      const paymentMethod = await paymentMethodService.createPaymentMethod(
        req.body,
      );
      res.status(201).json(paymentMethod);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // -> traer metodos de pago sin paginacion
  async getAllPaymentMethods(req, res) {
    try {
      const paymentMethods = await paymentMethodService.getAllPaymentMethods();
      res.status(200).json(paymentMethods);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // -> traer metodos de pago con paginacion
  async getPaymentMethods(req, res) {
    try {
      const page = parseInt(req.params.page) || 1;
      const limit = parseInt(req.params.limit) || 10;
      const paymentMethods = await paymentMethodService.getPaymentMethods(
        page,
        limit,
      );
      res.status(200).json(paymentMethods);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // -> traer un metodo de pago por id
  async getPaymentMethodById(req, res) {
    try {
      const { id } = req.params;
      const paymentMethod = await paymentMethodService.getPaymentMethodById(id);
      if (!paymentMethod) {
        return res.status(404).json({ message: "PaymentMethod not found" });
      }
      res.status(200).json(paymentMethod);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // -> actualizar un metodo de pago por id
  async updatePaymentMethod(req, res) {
    try {
      const { id } = req.params;
      const paymentMethod = await paymentMethodService.updatePaymentMethod(
        id,
        req.body,
      );
      if (!paymentMethod) {
        return res.status(404).json({ message: "PaymentMethod not found" });
      }
      res.status(200).json(paymentMethod);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // -> activar o desactivar un metodo de pago por id
  async toggleActive(req, res) {
    try {
      const { id } = req.params;
      const data = await paymentMethodService.toggleActive(id);
      return res.status(200).json({ ok: true, data });
    } catch (error) {
      return res.status(404).json({ ok: false, message: error.message });
    }
  }

  // -> solo los activos porque será publico
  async getActivePaymentMethods(req, res){
    try {
        const paymentMethods = await paymentMethodService.getActivePaymentMethods();
        res.status(200).json(paymentMethods);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }

}

module.exports = new PaymentMethodController();
