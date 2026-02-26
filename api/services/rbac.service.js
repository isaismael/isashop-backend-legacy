const bcrypt = require("bcrypt");
const repo = require("../repository/rbac.repository");

// ─── USERS ───────────────────────────────────────────────────────────────────

const getUsers = async () => repo.getAllUsers();

const getUserById = async (id) => {
  const user = await repo.getUserById(id);
  if (!user) throw { status: 404, message: "Usuario no encontrado" };
  return user;
};

const createUser = async ({ name, last_name, email, password, role_ids = [] }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await repo.createUser({ name, last_name, email, password: hashedPassword });
  for (const role_id of role_ids) {
    await repo.assignRoleToUser(user.id, role_id);
  }
  return await repo.getUserById(user.id);
};

const updateUser = async (id, data) => {
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }
  const user = await repo.updateUser(id, data);
  if (!user) throw { status: 404, message: "Usuario no encontrado" };
  return user;
};

const deleteUser = async (id) => {
  await repo.deleteUser(id);
  return { message: "Usuario desactivado correctamente" };
};

const assignRoleToUser = async (user_id, role_id) => {
  await getUserById(user_id);
  await getRoleById(role_id);
  return await repo.assignRoleToUser(user_id, role_id);
};

const removeRoleFromUser = async (user_id, role_id) => {
  await repo.removeRoleFromUser(user_id, role_id);
  return { message: "Rol removido del usuario" };
};

// ─── ROLES ───────────────────────────────────────────────────────────────────

const getRoles = async () => repo.getAllRoles();

const getRoleById = async (id) => {
  const role = await repo.getRoleById(id);
  if (!role) throw { status: 404, message: "Rol no encontrado" };
  return role;
};

const createRole = async ({ name, permission_ids = [] }) => {
  const role = await repo.createRole({ name });
  if (permission_ids.length) {
    await repo.syncPermissionsToRole(role.id, permission_ids);
  }
  return await repo.getRoleById(role.id);
};

const updateRole = async (id, { name, permission_ids }) => {
  const role = await repo.updateRole(id, { name });
  if (!role) throw { status: 404, message: "Rol no encontrado" };
  if (permission_ids !== undefined) {
    await repo.syncPermissionsToRole(id, permission_ids);
  }
  return await repo.getRoleById(id);
};

const deleteRole = async (id) => {
  await repo.deleteRole(id);
  return { message: "Rol desactivado correctamente" };
};

const assignPermissionToRole = async (role_id, permission_id) => {
  await getRoleById(role_id);
  await getPermissionById(permission_id);
  return await repo.assignPermissionToRole(role_id, permission_id);
};

const removePermissionFromRole = async (role_id, permission_id) => {
  await repo.removePermissionFromRole(role_id, permission_id);
  return { message: "Permiso removido del rol" };
};

// ─── PERMISSIONS ─────────────────────────────────────────────────────────────

const getPermissions = async () => repo.getAllPermissions();

const getPermissionById = async (id) => {
  const permission = await repo.getPermissionById(id);
  if (!permission) throw { status: 404, message: "Permiso no encontrado" };
  return permission;
};

const createPermission = async ({ key, description }) => {
  return await repo.createPermission({ key, description });
};

const updatePermission = async (id, data) => {
  const permission = await repo.updatePermission(id, data);
  if (!permission) throw { status: 404, message: "Permiso no encontrado" };
  return permission;
};

const deletePermission = async (id) => {
  await repo.deletePermission(id);
  return { message: "Permiso desactivado correctamente" };
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