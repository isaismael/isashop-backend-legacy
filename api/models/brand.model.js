const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class Brand extends Model {}

Brand.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // brand_image: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    active: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
},
{
    sequelize,
    modelName: 'Brand',
    tableName: 'brand',
    timestamps: false,
})

module.exports = Brand;