const User = require("./user.model");
const Role = require("./roles.model");
const UserRoles = require("./userRoles.model");
const Permissions = require("./permissions.model");
const RolePermissions = require("./rolePermissions.model");
// ->
const Product = require("./product.model");
const ProductVariation = require("./productVariation.model");
const SubCategory = require("./subcategory.model");
const Category = require("./category.model");
const Department = require("./department.model");
const Brand = require("./brand.model");
const BrandImage = require("./brandImage.model");
const ProductImage = require("./productImage.model");
const Tag = require("./tag.model");
const ProductTag = require("./productTag.model");
const Color = require("./color.model");
const Size = require("./size.model");
const Warehouse = require("./warehouse.model");
const Stock = require("./stock.model");
const Collections = require("./collections.model");
const CollectionProduct = require("./collectionProduct.model");
const Customer = require("./customer.model");
const ShippingAdress = require("./shippingAdress.model");
const Order = require("./order.model");
const OrderItem = require("./orderItem.model");
const PaymentMethod = require("./paymentMethod.model");
const Cart = require("./cart.model");
const CartItem = require("./cartItem.model");
const Province = require("./province.model");
const ShippingCost = require("./shippingCost.model");

// -> user - role
User.belongsToMany(Role, {
  through: UserRoles,
  foreignKey: "user_id",
  otherKey: "role_id",
  as: "roles",
});

Role.belongsToMany(User, {
  through: UserRoles,
  foreignKey: "role_id",
  otherKey: "user_id",
  as: "users",
});

// role - permissions (N:N)
Role.belongsToMany(Permissions, {
  through: RolePermissions,
  foreignKey: "role_id",
  otherKey: "permission_id",
  as: "permissions",
});

Permissions.belongsToMany(Role, {
  through: RolePermissions,
  foreignKey: "permission_id",
  otherKey: "role_id",
  as: "roles",
});

// -> brand - brandImage
Brand.hasMany(BrandImage, {
  foreignKey: "brand_id",
  as: "images",
});
BrandImage.belongsTo(Brand, {
  foreignKey: "brand_id",
  as: "brand",
});

// -> product - brand
Product.belongsTo(Brand, {
  foreignKey: "brand_id",
  as: "brand",
});
Brand.hasMany(Product, {
  foreignKey: "brand_id",
  as: "products",
});

// -> product -subcategory
Product.belongsTo(SubCategory, {
  foreignKey: "subcategory_id",
  as: "subcategory",
});
SubCategory.hasMany(Product, {
  foreignKey: "subcategory_id",
  as: "products",
});

// -> departament - category
Category.belongsTo(Department, {
  foreignKey: "departament_id",
  as: "department",
});

Department.hasMany(Category, {
  foreignKey: "departament_id",
  as: "categories",
});

// -> subcategory y category
SubCategory.belongsTo(Category, {
  foreignKey: "category_id",
  as: "category",
});
Category.hasMany(SubCategory, {
  foreignKey: "category_id",
  as: "subcategories",
});

// -> product_img - product
ProductImage.belongsTo(Product, {
  foreignKey: "product_id",
  as: "product",
});
Product.hasMany(ProductImage, {
  foreignKey: "product_id",
  as: "product_images",
});

// -> product_img - product_img
ProductImage.belongsTo(ProductVariation, {
  foreignKey: "product_variation_id",
  as: "product_variation",
});
ProductVariation.hasMany(ProductImage, {
  foreignKey: "product_variation_id",
  as: "product_images",
});

// -> tag - product_tag
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
  otherKey: "tag_id",
  as: "tags",
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
  otherKey: "product_id",
  as: "products",
});

// -> product_varation - product
ProductVariation.belongsTo(Product, {
  foreignKey: "product_id",
  as: "product",
});
Product.hasMany(ProductVariation, {
  foreignKey: "product_id",
  as: "product_variations",
});

// -> product_varation - color
ProductVariation.belongsTo(Color, {
  foreignKey: "color_id",
  as: "color",
});
Color.hasMany(ProductVariation, {
  foreignKey: "color_id",
  as: "product_variations",
});

// -> product_varation - size
ProductVariation.belongsTo(Size, {
  foreignKey: "size_id",
  as: "size",
});
Size.hasMany(ProductVariation, {
  foreignKey: "size_id",
  as: "product_variations",
});

// -> stock - warehouse
Stock.belongsTo(Warehouse, {
  foreignKey: "warehouse_id",
  as: "warehouse",
});
Warehouse.hasMany(Stock, {
  foreignKey: "warehouse_id",
  as: "stocks",
});

// -> stock - product_varation
Stock.belongsTo(ProductVariation, {
  foreignKey: "product_variation_id",
  as: "product_variation",
});
ProductVariation.hasMany(Stock, {
  foreignKey: "product_variation_id",
  as: "stocks",
});

// -> collection_product - collections
CollectionProduct.belongsTo(Collections, {
  foreignKey: "collection_id",
  as: "collection",
});
Collections.hasMany(CollectionProduct, {
  foreignKey: "collection_id",
  as: "collections",
});

// -> collection_product - product_varation
CollectionProduct.belongsTo(ProductVariation, {
  foreignKey: "product_variation_id",
  as: "product_variation",
});
ProductVariation.hasMany(CollectionProduct, {
  foreignKey: "product_variation_id",
  as: "product_variations",
});

// -> shipping_address - customer
ShippingAdress.belongsTo(Customer, {
  foreignKey: "customer_id",
  as: "customer",
});
Customer.hasMany(ShippingAdress, {
  foreignKey: "customer_id",
  as: "shipping_addresses",
});

// -> order - customer
Order.belongsTo(Customer, {
  foreignKey: "customer_id",
  as: "customer",
});
Customer.hasMany(Order, {
  foreignKey: "customer_id",
  as: "orders",
});

// -> order - payment_method
Order.belongsTo(PaymentMethod, {
  foreignKey: "payment_method_id",
  as: "payment_method",
});
PaymentMethod.hasMany(Order, {
  foreignKey: "payment_method_id",
  as: "orders",
});

// -> order - shipping_address
Order.belongsTo(ShippingAdress, {
  foreignKey: "shipping_adress_id",
  as: "shipping_adress",
});
ShippingAdress.hasMany(Order, {
  foreignKey: "shipping_adress_id",
  as: "orders",
});

// -> order - warehouse
Order.belongsTo(Warehouse, {
  foreignKey: "warehouse_id",
  as: "warehouse",
});
Warehouse.hasMany(Order, {
  foreignKey: "warehouse_id",
  as: "orders",
});

// -> order_item - order
OrderItem.belongsTo(Order, {
  foreignKey: "order_id",
  as: "order",
});
Order.hasMany(OrderItem, {
  foreignKey: "order_id",
  as: "order_items",
});

// -> order - product_varation
OrderItem.belongsTo(ProductVariation, {
  foreignKey: "product_variation_id",
  as: "product_variation",
});

ProductVariation.hasMany(OrderItem, {
  foreignKey: "product_variation_id",
  as: "order_items",
});

// -> cart - customer
Cart.belongsTo(Customer, {
  foreignKey: "customer_id",
  as: "customer",
});
Customer.hasMany(Cart, {
  foreignKey: "customer_id",
  as: "carts",
});

// -> cart_item - cart
CartItem.belongsTo(Cart, {
  foreignKey: "cart_id",
  as: "cart",
});
Cart.hasMany(CartItem, {
  foreignKey: "cart_id",
  as: "cart_items",
});

// -> cart_item - product_varation
CartItem.belongsTo(ProductVariation, {
  foreignKey: "product_variation_id",
  as: "product_variation",
});
ProductVariation.hasMany(CartItem, {
  foreignKey: "product_variation_id",
  as: "cart_items",
});

// -> entre provincia y costo de envio
ShippingCost.belongsTo(Province, {
  foreignKey: "province_id",
  as: "province",
});
Province.hasMany(ShippingCost, {
  foreignKey: "province_id",
  as: "shipping_costs",
});

// -> shipping_address - province
ShippingAdress.belongsTo(Province, {
  foreignKey: "province_id",
  as: "province",
});

Province.hasMany(ShippingAdress, {
  foreignKey: "province_id",
  as: "shipping_addresses",
});

module.exports = {
  User,
  Role,
  UserRoles,
  Permissions,
  RolePermissions,
  Product,
  ProductVariation,
  SubCategory,
  Category,
  Department,
  Brand,
  BrandImage,
  ProductImage,
  Tag,
  ProductTag,
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
  CartItem,
  Province,
  ShippingCost,
};
