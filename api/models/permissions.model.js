const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class Permissions extends Model { }

Permissions.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    key: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    is_active: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    }
}, {
    sequelize,
    modelName: 'Permissions',
    tableName: 'permissions',
    timestamps: true,
    underscored: true
})

module.exports = Permissions;