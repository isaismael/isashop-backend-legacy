const { Router } = require("express");
const ctrl = require("../controllers/rbac.controller");
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = Router();

// ─── USERS ─────────────────────────────────────── /api/admin/users ──────────
router.get("/users", ctrl.getUsers);
router.get("/users/:id", ctrl.getUserById);
router.post("/users", ctrl.createUser);
router.put("/users/:id", ctrl.updateUser);
router.delete("/users/:id", ctrl.deleteUser);

// assign / remove role from user
router.post("/users/:id/roles", ctrl.assignRoleToUser);
router.delete("/users/:id/roles/:role_id", ctrl.removeRoleFromUser);

// ─── ROLES ─────────────────────────────────────── /api/admin/roles ──────────
router.get("/roles", ctrl.getRoles);
router.get("/roles/:id", ctrl.getRoleById);
router.post("/roles", ctrl.createRole);
router.put("/roles/:id", ctrl.updateRole);
router.delete("/roles/:id", ctrl.deleteRole);

// assign / remove permission from role
router.post("/roles/:id/permissions", ctrl.assignPermissionToRole);
router.delete("/roles/:id/permissions/:permission_id", ctrl.removePermissionFromRole);

// ─── PERMISSIONS ───────────────────────────── /api/admin/permissions ────────
router.get("/permissions", ctrl.getPermissions);
router.get("/permissions/:id", ctrl.getPermissionById);
router.post("/permissions", ctrl.createPermission);
router.put("/permissions/:id", ctrl.updatePermission);
router.delete("/permissions/:id", ctrl.deletePermission);

module.exports = router;