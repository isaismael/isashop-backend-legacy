const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class UserRoles extends Model { }

UserRoles.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        },
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'roles',
            key: 'id',
        }
    }
}, {
    sequelize,
    modelName: 'UserRoles',
    tableName: 'user_roles',
    timestamps: false,

});

module.exports = UserRoles;