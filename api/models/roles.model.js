const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class Roles extends Model { }

Roles.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        is_active: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        }
    },
    {
        sequelize,
        modelName: 'Role',
        tableName: 'roles',
        timestamps: true,
        underscored: true
    }
)

module.exports = Roles;