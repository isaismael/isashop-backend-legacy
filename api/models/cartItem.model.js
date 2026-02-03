const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class CartItem extends Model { }

CartItem.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'cart',
            key: 'id',
        },
    },
    product_variation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'product_variation',
            key: 'id',
        },
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
    {
        sequelize,
        modelName: 'CartItem',
        tableName: 'cart_item',
        timestamps: true,
        underscored: true
    })

module.exports = CartItem;