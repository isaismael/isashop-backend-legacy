const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class PromoBanner extends Model { }

PromoBanner.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    url_img: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    text_button: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url_button: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    active: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    }
}, {
    sequelize,
    modelName: 'PromoBanner',
    tableName: 'promo_banner',
    timestamps: true,
    underscored: true
})

module.exports = PromoBanner;