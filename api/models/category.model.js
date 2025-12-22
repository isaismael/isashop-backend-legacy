const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class Category extends Model {}

Category.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    departament_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'departament',
            key: 'id',
        },
    },
    active: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
},{
    sequelize,
    modelName: 'Category',
    tableName: 'category',
    timestamps: false,
})

module.exports = Category;