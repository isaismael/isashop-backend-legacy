const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, UserRoles, Role, Permissions, Customer } = require("../models");

class AuthService {
  async register(userData) {
    const { name, last_name, email, password, role_id } = userData;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) throw new Error("El usuario ya existe");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      last_name,
      email,
      password: hashedPassword,
    });

    await UserRoles.create({
      user_id: user.id,
      role_id,
    });

    return user;
  }

  async login(email, password) {
    const user = await User.findOne({
      where: { email },
      include: {
        model: Role,
        as: "roles",
        through: { attributes: [] },
        include: {
          model: Permissions,
          as: "permissions",
          through: { attributes: [] },
        },
      },
    });

    if (!user) throw new Error("Credenciales inválidas");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error("Credenciales inválidas");

    const roles = user.roles.map((r) => r.name);
    const permissions = [
      ...new Set(user.roles.flatMap((r) => r.permissions.map((p) => p.key))),
    ];

    const token = jwt.sign(
      { sub: user.id, email: user.email, roles, permissions },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    return {
      token,
      user: { id: user.id, name: user.name, email: user.email, roles },
    };
  }

  verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
  }

  //-> registracion de usuarios con bcryt
  // name, last_name, phone, email, password
  async registerCustomer(customerData) {
    const { name, last_name, phone, email, password } = customerData;

    const existingCustomer = await Customer.findOne({ where: { email } });
    if (existingCustomer) throw new Error("El usuario ya existe");

    const hashedPassword = await bcrypt.hash(password, 10);
    const customer = await Customer.create({
      name,
      last_name,
      phone,
      email,
      password: hashedPassword,
    });

    return customer;
  }

  //-> ahora el login pero para el customer
  async loginCustomer(email, password) {
    const customer = await Customer.findOne({ where: { email } });
    if (!customer) throw new Error("Credenciales inválidas");

    const valid = await bcrypt.compare(password, customer.password);
    if (!valid) throw new Error("Credenciales inválidas");

    const token = jwt.sign(
      { sub: customer.id, email: customer.email, type: "customer" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    return {
      token,
      customer: {
        id: customer.id,
        name: customer.name,
        last_name: customer.last_name,
        email: customer.email,
        phone: customer.phone,
      },
    };
  }
  
}

module.exports = new AuthService();
