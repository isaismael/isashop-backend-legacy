const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class Department extends Model {}

Department.init({
    id:{
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
    },
},{
    sequelize,
    modelName: 'Departament',
    tableName: 'departament',
    timestamps: false,
})

module.exports = Department;