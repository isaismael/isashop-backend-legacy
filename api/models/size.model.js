const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

class Size extends Model {}

Size.init(
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
    modelName: "Size",
    tableName: "size",
    timestamps: false,
  }
);

module.exports = Size;
