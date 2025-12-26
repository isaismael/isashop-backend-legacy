const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class RolePermissions extends Model { }

RolePermissions.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'roles',
            key: 'id',
        },
    },
    permission_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'permissions',
            key: 'id',
        }
    }
}, {
    sequelize,
    modelName: 'RolePermissions',
    tableName: 'role_permissions',
    timestamps: false,

})

module.exports = RolePermissions;