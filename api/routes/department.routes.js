const DepartmentController = require('../controllers/department.controller');
const express = require('express');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createdepartment', authenticateToken, authorizeRoles('IT'), DepartmentController.createDepartment);
// -> con paginacion
router.get('/getdepartments', authenticateToken, authorizeRoles('IT'), DepartmentController.getDepartmentsPagination);
// -> sin paginacion
router.get('/getalldepartments', authenticateToken, authorizeRoles('IT'), DepartmentController.getAllDepartments);
router.get('/getdepartment/:id', authenticateToken, authorizeRoles('IT'), DepartmentController.getDepartmentById);
router.put('/updatedepartment/:id', authenticateToken, authorizeRoles('IT'), DepartmentController.updateDepartment);
router.delete('/deletedepartment/:id', authenticateToken, authorizeRoles('IT'), DepartmentController.deleteDepartment)

// -> rutas publicas
// pensado para el mega menú
router.get('/public/getalldepartments', DepartmentController.getAllDepartments);

module.exports = router;

