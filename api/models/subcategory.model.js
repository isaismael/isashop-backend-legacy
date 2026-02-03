const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class SubCategory extends Model {}

SubCategory.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'category',
            key: 'id',
        },
    },
    active: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    }
},
{
    sequelize,
    modelName: 'SubCategory',
    tableName: 'subcategory',
    timestamps: true,
    underscored: true
})

module.exports = SubCategory;