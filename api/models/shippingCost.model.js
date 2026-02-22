const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

class ShippingCost extends Model {}

ShippingCost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    province_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "province",
        key: "id",
      },
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "ShippingCost",
    tableName: "shipping_cost",
    timestamps: true,
    underscored: true,
  },
);

module.exports = ShippingCost;
