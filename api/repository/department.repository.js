const { Department, Category, SubCategory } = require('../models/index');

class DepartmentRepository {

    async getAllDepartments() {
        const departments = await Department.findAll({
            include: [
                {
                    model: Category,
                    as: 'categories',
                    include: [
                        {
                            model: SubCategory,
                            as: 'subcategories'
                        }
                    ]
                }
            ]
        });
        return departments;
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