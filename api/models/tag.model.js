const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class Tag extends Model {}

Tag.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    sequelize,
    modelName: 'Tag',
    tableName: 'tag',
    timestamps: false,
})

module.exports = Tag;