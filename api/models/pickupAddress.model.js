const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class PickupAddress extends Model {}

PickupAddress.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    active: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    }
}, {
    sequelize,
    modelName: 'PickupAddress',
    tableName: 'pickup_address',
    timestamps: true,
    underscored: true
})

module.exports = PickupAddress;