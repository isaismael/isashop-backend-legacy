const service = require("../services/rbac.service");

const handleError = (res, err) => {
  const status = err.status || 500;
  const message = err.message || "Error interno del servidor";
  return res.status(status).json({ ok: false, message });
};

// ─── USERS ───────────────────────────────────────────────────────────────────

const getUsers = async (req, res) => {
  try {
    const users = await service.getUsers();
    res.json({ ok: true, data: users });
  } catch (err) { handleError(res, err); }
};

const getUserById = async (req, res) => {
  try {
    const user = await service.getUserById(req.params.id);
    res.json({ ok: true, data: user });
  } catch (err) { handleError(res, err); }
};

const createUser = async (req, res) => {
  try {
    const user = await service.createUser(req.body);
    res.status(201).json({ ok: true, data: user });
  } catch (err) { handleError(res, err); }
};

const updateUser = async (req, res) => {
  try {
    const user = await service.updateUser(req.params.id, req.body);
    res.json({ ok: true, data: user });
  } catch (err) { handleError(res, err); }
};

const deleteUser = async (req, res) => {
  try {
    const result = await service.deleteUser(req.params.id);
    res.json({ ok: true, ...result });
  } catch (err) { handleError(res, err); }
};

const assignRoleToUser = async (req, res) => {
  try {
    const { role_id } = req.body;
    await service.assignRoleToUser(req.params.id, role_id);
    res.json({ ok: true, message: "Rol asignado correctamente" });
  } catch (err) { handleError(res, err); }
};

const removeRoleFromUser = async (req, res) => {
  try {
    await service.removeRoleFromUser(req.params.id, req.params.role_id);
    res.json({ ok: true, message: "Rol removido correctamente" });
  } catch (err) { handleError(res, err); }
};

// ─── ROLES ───────────────────────────────────────────────────────────────────

const getRoles = async (req, res) => {
  try {
    const roles = await service.getRoles();
    res.json({ ok: true, data: roles });
  } catch (err) { handleError(res, err); }
};

const getRoleById = async (req, res) => {
  try {
    const role = await service.getRoleById(req.params.id);
    res.json({ ok: true, data: role });
  } catch (err) { handleError(res, err); }
};

const createRole = async (req, res) => {
  try {
    const role = await service.createRole(req.body);
    res.status(201).json({ ok: true, data: role });
  } catch (err) { handleError(res, err); }
};

const updateRole = async (req, res) => {
  try {
    const role = await service.updateRole(req.params.id, req.body);
    res.json({ ok: true, data: role });
  } catch (err) { handleError(res, err); }
};

const deleteRole = async (req, res) => {
  try {
    const result = await service.deleteRole(req.params.id);
    res.json({ ok: true, ...result });
  } catch (err) { handleError(res, err); }
};

const assignPermissionToRole = async (req, res) => {
  try {
    const { permission_id } = req.body;
    await service.assignPermissionToRole(req.params.id, permission_id);
    res.json({ ok: true, message: "Permiso asignado correctamente" });
  } catch (err) { handleError(res, err); }
};

const removePermissionFromRole = async (req, res) => {
  try {
    await service.removePermissionFromRole(req.params.id, req.params.permission_id);
    res.json({ ok: true, message: "Permiso removido correctamente" });
  } catch (err) { handleError(res, err); }
};

// ─── PERMISSIONS ─────────────────────────────────────────────────────────────

const getPermissions = async (req, res) => {
  try {
    const permissions = await service.getPermissions();
    res.json({ ok: true, data: permissions });
  } catch (err) { handleError(res, err); }
};

const getPermissionById = async (req, res) => {
  try {
    const permission = await service.getPermissionById(req.params.id);
    res.json({ ok: true, data: permission });
  } catch (err) { handleError(res, err); }
};

const createPermission = async (req, res) => {
  try {
    const permission = await service.createPermission(req.body);
    res.status(201).json({ ok: true, data: permission });
  } catch (err) { handleError(res, err); }
};

const updatePermission = async (req, res) => {
  try {
    const permission = await service.updatePermission(req.params.id, req.body);
    res.json({ ok: true, data: permission });
  } catch (err) { handleError(res, err); }
};

const deletePermission = async (req, res) => {
  try {
    const result = await service.deletePermission(req.params.id);
    res.json({ ok: true, ...result });
  } catch (err) { handleError(res, err); }
};

module.exports = {
  // users
  getUsers, getUserById, createUser, updateUser, deleteUser,
  assignRoleToUser, removeRoleFromUser,
  // roles
  getRoles, getRoleById, createRole, updateRole, deleteRole,
  assignPermissionToRole, removePermissionFromRole,
  // permissions
  getPermissions, getPermissionById, createPermission, updatePermission, deletePermission,
};