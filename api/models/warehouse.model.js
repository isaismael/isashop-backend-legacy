const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

class Warehouse extends Model {}

Warehouse.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
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
    modelName: 'Warehouse',
    tableName: 'warehouse',
    timestamps: true,
    underscored: true
})

module.exports = Warehouse;