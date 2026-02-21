const AuthService = require("../services/auth.service");

class CustomerController {

  async loginCustomer(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        return res
          .status(400)
          .json({ message: "Email y contraseña requeridos" });

      const result = await AuthService.loginCustomer(email, password);
      res.status(200).json(result);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async registerCustomer(req, res) {
    try {
      const customer = await AuthService.registerCustomer(req.body);
      res
        .status(201)
        .json({ message: "Cliente registrado correctamente", customer });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new CustomerController();
