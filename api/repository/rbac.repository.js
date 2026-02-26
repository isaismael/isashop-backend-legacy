const { User, Role, Permissions, UserRoles, RolePermissions } = require("../models");

// ─── USERS ───────────────────────────────────────────────────────────────────

const getAllUsers = async () => {
  return await User.findAll({
    include: [{ model: Role, as: "roles", include: [{ model: Permissions, as: "permissions" }] }],
    where: { is_active: 1 },
  });
};

const getUserById = async (id) => {
  return await User.findOne({
    where: { id, is_active: 1 },
    include: [{ model: Role, as: "roles", include: [{ model: Permissions, as: "permissions" }] }],
  });
};

const createUser = async ({ name, last_name, email, password }) => {
  return await User.create({ name, last_name, email, password });
};

const updateUser = async (id, data) => {
  const [updated] = await User.update(data, { where: { id } });
  if (!updated) return null;
  return await getUserById(id);
};

const deleteUser = async (id) => {
  return await User.update({ is_active: 0 }, { where: { id } });
};

const assignRoleToUser = async (user_id, role_id) => {
  const existing = await UserRoles.findOne({ where: { user_id, role_id } });
  if (existing) return existing;
  return await UserRoles.create({ user_id, role_id });
};

const removeRoleFromUser = async (user_id, role_id) => {
  return await UserRoles.destroy({ where: { user_id, role_id } });
};

// ─── ROLES ───────────────────────────────────────────────────────────────────

const getAllRoles = async () => {
  return await Role.findAll({
    where: { is_active: 1 },
    include: [{ model: Permissions, as: "permissions" }],
  });
};

const getRoleById = async (id) => {
  return await Role.findOne({
    where: { id, is_active: 1 },
    include: [{ model: Permissions, as: "permissions" }],
  });
};

const createRole = async ({ name }) => {
  return await Role.create({ name });
};

const updateRole = async (id, data) => {
  const [updated] = await Role.update(data, { where: { id } });
  if (!updated) return null;
  return await getRoleById(id);
};

const deleteRole = async (id) => {
  return await Role.update({ is_active: 0 }, { where: { id } });
};

const assignPermissionToRole = async (role_id, permission_id) => {
  const existing = await RolePermissions.findOne({ where: { role_id, permission_id } });
  if (existing) return existing;
  return await RolePermissions.create({ role_id, permission_id });
};

const removePermissionFromRole = async (role_id, permission_id) => {
  return await RolePermissions.destroy({ where: { role_id, permission_id } });
};

const syncPermissionsToRole = async (role_id, permission_ids = []) => {
  await RolePermissions.destroy({ where: { role_id } });
  const records = permission_ids.map((permission_id) => ({ role_id, permission_id }));
  if (records.length) await RolePermissions.bulkCreate(records);
  return await getRoleById(role_id);
};

// ─── PERMISSIONS ─────────────────────────────────────────────────────────────

const getAllPermissions = async () => {
  return await Permissions.findAll({ where: { is_active: 1 } });
};

const getPermissionById = async (id) => {
  return await Permissions.findOne({ where: { id, is_active: 1 } });
};

const createPermission = async ({ key, description }) => {
  return await Permissions.create({ key, description });
};

const updatePermission = async (id, data) => {
  const [updated] = await Permissions.update(data, { where: { id } });
  if (!updated) return null;
  return await getPermissionById(id);
};

const deletePermission = async (id) => {
  return await Permissions.update({ is_active: 0 }, { where: { id } });
};

module.exports = {
  // users
  getAllUsers, getUserById, createUser, updateUser, deleteUser,
  assignRoleToUser, removeRoleFromUser,
  // roles
  getAllRoles, getRoleById, createRole, updateRole, deleteRole,
  assignPermissionToRole, removePermissionFromRole, syncPermissionsToRole,
  // permissions
  getAllPermissions, getPermissionById, createPermission, updatePermission, deletePermission,
};