const { Department, Category, SubCategory } = require("../models/index");

class DepartmentRepository {
  async getDepartmentsPagination(page = 1, limit = 10) {
    const offset = (page - 1) * limit;
    const departments = await Department.findAll({
      where: { active: 1 },
      offset,
      limit,
      include: [
        {
          model: Category,
          as: "categories",
          include: [
            {
              model: SubCategory,
              as: "subcategories",
            },
          ],
        },
      ],
    });
    const total = await Department.count();
    return {
      data: departments,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getAllDepartments() {
    return await Department.findAll({
      where: { active: 1 },
      include: [
        {
          model: Category,
          as: "categories",
          include: [
            {
              model: SubCategory,
              as: "subcategories",
            },
          ],
        },
      ],
    });
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
