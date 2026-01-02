const authService = require('../services/auth.service');

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) return res.status(401).json({ error: 'Token requerido' });

  try {
    const decoded = await authService.verifyToken(token);
    req.user = decoded; // { sub, email, roles:[], permissions:[] }
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Token inválido' });
  }
};

// Autorizar por roles (ahora roles es un array)
const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const userRoles = req.user?.roles || [];
    const ok = allowedRoles.some((r) => userRoles.includes(r));

    if (!ok) return res.status(403).json({ error: 'Acceso denegado' });
    next();
  };
};

// Autorizar por permisos (recomendado para endpoints)
const authorizePermissions = (...allowedPermissions) => {
  return (req, res, next) => {
    const userPerms = req.user?.permissions || [];
    const ok = allowedPermissions.every((p) => userPerms.includes(p));
    // si querés que sea OR en vez de AND: usar some()

    if (!ok) return res.status(403).json({ error: 'Acceso denegado' });
    next();
  };
};

module.exports = { authenticateToken, authorizeRoles, authorizePermissions };
