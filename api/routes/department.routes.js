const DepartmentController = require('../controllers/department.controller');
const express = require('express');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createdepartment', authenticateToken, authorizeRoles('it'), DepartmentController.createDepartment);
router.get('/getdepartments', authenticateToken, authorizeRoles('it'), DepartmentController.getAllDepartments);
router.put('/updatedepartment/:id', authenticateToken, authorizeRoles('it'), DepartmentController.updateDepartment);
router.delete('/deletedepartment/:id', authenticateToken, authorizeRoles('it'), DepartmentController.deleteDepartment)


module.exports = router;

