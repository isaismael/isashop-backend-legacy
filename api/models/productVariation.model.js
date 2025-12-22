const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

class ProductVariation extends Model {}

ProductVariation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sku_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "product",
        key: "id",
      },
    },
    color_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "color",
        key: "id",
      },
    },
    size_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "size",
        key: "id",
      },
    },
    older_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    current_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "ProductVariation",
    tableName: "product_variation",
    timestamps: false,
  }
);

module.exports = ProductVariation;
