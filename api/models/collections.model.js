const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

class Collections extends Model {}

Collections.init(
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
    active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    }
  },
  {
    sequelize,
    modelName: "Collections",
    tableName: "collections",
    timestamps: true,
    underscored: true
  }
);

module.exports = Collections;
