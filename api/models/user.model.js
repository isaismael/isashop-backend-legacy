const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class User extends Model {}

User.init(
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
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    is_active: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    }
  },
  {
    sequelize,
    modelName: 'User',  // -> el nombre de la clase es un singular upper camel case
    tableName: 'users', // -> el nombre de la tabla es en plural. todo miniscula
    timestamps: true,
    underscored: true
  }
);

module.exports = User;
