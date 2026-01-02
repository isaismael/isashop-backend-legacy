const Department = require('../models/department.model');

class DepartmentRepository{
    async getAllDepartments() {
        return await Department.findAll();
    }

    async getDepartmentById(id) {
        return await Department.findByPk(id);
    }

    async createDepartment(department) {
        return await Department.create(department);
    }

    async updateDepartment(id, department) {
        return await Department.update(department, {
            where: { id: id },
        });
    }

    async deleteDepartment(id) {
        return await Department.destroy({
            where: { id: id },
        });
    }

}

module.exports = new DepartmentRepository();