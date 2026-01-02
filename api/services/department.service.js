const DepartmentRepository = require('../repository/department.repository');

class DepartmentService{
    async getAllDepartments() {
        return await DepartmentRepository.getAllDepartments();
    }

    async getDepartmentById(id) {
        return await DepartmentRepository.getDepartmentById(id);
    }

    async createDepartment(department) {
        return await DepartmentRepository.createDepartment(department);
    }

    async updateDepartment(id, department) {
        return await DepartmentRepository.updateDepartment(id, department);
    }

    async deleteDepartment(id) {
        return await DepartmentRepository.deleteDepartment(id);
    }

}

module.exports = new DepartmentService();