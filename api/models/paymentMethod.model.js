const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class PaymentMethod extends Model { }

PaymentMethod.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    active: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    }
},
    {
        sequelize,
        modelName: 'PaymentMethod',
        tableName: 'payment_method',
        timestamps: true,
        underscored: true
    })

module.exports = PaymentMethod;