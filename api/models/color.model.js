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
    active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "Color",
    tableName: "color",
    timestamps: false,
  }
);

module.exports = Color;
