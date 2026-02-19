const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

class Color extends Model {}

Color.init(
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
    hex: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "Color",
    tableName: "color",
    timestamps: true,
    underscored: true,
  },
);

module.exports = Color;
