const User = require('./user.model');
const Role = require('./roles.model');
const Product = require('./product.model');
const SubCategory = require('./subcategory.model');
const Category = require('./category.model');
const Departament = require('./departament.model');

// -> User tiene la FK → belongsTo
User.belongsTo(Role, {
  foreignKey: 'role_id',
  as: 'role',
});
// -> Role es el padre → hasMany
Role.hasMany(User, {
  foreignKey: 'role_id',
  as: 'users',
});

// -> category y departamento
Category.belongsTo(Departament, {
  foreignKey: 'departament_id',
  as: 'departament',
});

Departament.hasMany(Category, {
  foreignKey: 'departament_id',
  as: 'categories',
});

// -> subcategory y category
SubCategory.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'category',
});

Category.hasMany(SubCategory, {
  foreignKey: 'category_id',
  as: 'subcategories',
});


module.exports = {
  User,
  Role,
};
