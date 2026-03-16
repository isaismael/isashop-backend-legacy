const AuthService = require("../services/auth.service");
const CustomerService = require("../services/customer.service");

class CustomerController {
  async loginCustomer(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        return res.status(400).json({ message: "Email y contraseña requeridos" });
      const result = await AuthService.loginCustomer(email, password);
      res.status(200).json(result);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async registerCustomer(req, res) {
    try {
      const customer = await AuthService.registerCustomer(req.body);
      res.status(201).json({ message: "Cliente registrado correctamente", customer });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  //
  async getCustomerById(req, res) {
    try {
      const customer = await CustomerService.getCustomerById(req.params.id);
      if (!customer) return res.status(404).json({ message: "Cliente no encontrado" });
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCustomer(req, res) {
    try {
      const customer = await CustomerService.updateCustomer(req.params.id, req.body);
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCustomers(req, res){
    try {
      const page = parseInt(req.params.page) || 1;
      const limit = parseInt(req.params.limit) || 10;
      const customers = await CustomerService.getCustomers(page, limit);
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

}

module.exports = new CustomerController();