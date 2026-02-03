const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class ShippingAdress extends Model {}

ShippingAdress.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'customer',
            key: 'id',
        },
    },
    zip_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    province: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    sequelize,
    modelName: 'ShippingAdress',
    tableName: 'shipping_adress',
    timestamps: true,
    underscored: true
})

module.exports = ShippingAdress;