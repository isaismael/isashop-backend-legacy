const User = require('./user.model');
const Role = require('./roles.model');
const Product = require('./product.model');
const ProductVariation = require('./productVariation.model');
const SubCategory = require('./subcategory.model');
const Category = require('./category.model');
const Departament = require('./departament.model');
const Brand = require('./brand.model');
const PruductImage = require('./productImage.model');
const Tag = require('./tag.model');
const PruductTag = require('./productTag.model');
const Color = require('./color.model');
const Size = require('./size.model');
const Warehouse = require('./warehouse.model');
const Stock = require('./stock.model');
const Collections = require('./collections.model');
const CollectionProduct = require('./collectionProduct.model');
const Customer = require('./customer.model');
const ShippingAdress = require('./shippingAdress.model');
const Order = require('./order.model');
const OrderItem = require('./orderItem.model');
const PaymentMethod = require('./paymentMethod.model');
const Cart = require('./cart.model');
const CartItem = require('./cartItem.model');


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


// -> relaciones de producto



module.exports = {
  User,
  Role,
  Product,
  ProductVariation,
  SubCategory,
  Category,
  Departament,
  Brand,
  PruductImage,
  Tag,
  PruductTag,
  Color,
  Size,
  Warehouse,
  Stock,
  CollectionProduct,
  Collections,
  Customer,
  ShippingAdress,
  Order,
  OrderItem,
  PaymentMethod,
  Cart,
  CartItem
};
