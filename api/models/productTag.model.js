const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "tag",
        key: "id",
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "product",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "PruductTag",
    tableName: "product_tag",
    timestamps: true,
    underscored: true
  }
);

module.exports = ProductTag;
