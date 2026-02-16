const DepartmentService = require('../services/department.service');

class DepartmentController{
    async getDepartmentsPagination(req, res) {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const departments = await DepartmentService.getDepartmentsPagination(page, limit);
            res.status(200).json(departments);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAllDepartments(req, res){
        try {
            const departments = await DepartmentService.getAllDepartments();
            res.status(200).json(departments);
        } catch (error) {
            res.status(500).json({ error: error.message});
        }
    }

    async getDepartmentById(req, res) {
        try {
            const { id } = req.params;
            const department = await DepartmentService.getDepartmentById(id);
            if (!department) {
                return res.status(404).json({ message: 'Department not found' });
            }
            res.status(200).json(department);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createDepartment(req, res) {
        try {
            const department = await DepartmentService.createDepartment(req.body);
            res.status(201).json(department);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateDepartment(req, res) {
        try {
            const { id } = req.params;
            const [updated] = await DepartmentService.updateDepartment(id, req.body);
            if (!updated) {
                return res.status(404).json({ message: 'Department not found' });
            }
            const updatedDepartment = await DepartmentService.getDepartmentById(id);
            res.status(200).json(updatedDepartment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteDepartment(req, res) {
        try {
            const { id } = req.params;
            const deleted = await DepartmentService.deleteDepartment(id);
            if (!deleted) {
                return res.status(404).json({ message: 'Department not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


}

module.exports = new DepartmentController();