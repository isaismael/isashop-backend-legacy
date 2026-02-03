const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class OrderItem extends Model { }

OrderItem.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'order',
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
    unit_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    discount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    subtotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'OrderItem',
    tableName: 'order_item',
    timestamps: true,
    underscored: true
})

module.exports = OrderItem;