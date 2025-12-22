const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

class PruductTag extends Model {}

PruductTag.init(
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
    timestamps: false,
  }
);

module.exports = PruductTag;
