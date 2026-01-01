const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, UserRoles, Role, Permissions } = require('../models');

class AuthService {

  async register(userData) {
    const { name, last_name, email, password, role_id } = userData;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) throw new Error('El usuario ya existe');

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
        as: 'roles',
        through: { attributes: [] },
        include: {
          model: Permissions,
          as: 'permissions',
          through: { attributes: [] },
        },
      },
    });

    if (!user) throw new Error('Credenciales inválidas');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error('Credenciales inválidas');

    const roles = user.roles.map(r => r.name);
    const permissions = [
      ...new Set(user.roles.flatMap(r => r.permissions.map(p => p.key)))
    ];

    const token = jwt.sign(
      { sub: user.id, email: user.email, roles, permissions },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return {
      token,
      user: { id: user.id, name: user.name, email: user.email, roles },
    };
  }

  verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
  }
}

module.exports = new AuthService();
