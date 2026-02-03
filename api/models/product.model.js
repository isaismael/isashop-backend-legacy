const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_sku: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "brand",
        key: "id",
      },
    },
    subcategory_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "subcategory",
        key: "id",
      },
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    }
  },
  {
    sequelize,
    modelName: "Product",
    tableName: "product",
    timestamps: true,
    underscored: true
  }
);

module.exports = Product;