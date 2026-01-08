const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

class ProductImage extends Model {}

ProductImage.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "product",
        key: "id",
      },
    },
    product_variation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "product_variation",
        key: "id",
      },
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_main: {
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
    modelName: "PruductImage",
    tableName: "product_image",
    timestamps: false,
  }
);

module.exports = ProductImage;
