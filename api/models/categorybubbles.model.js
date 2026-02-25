const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

class CategoryBubbles extends Model {}

CategoryBubbles.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url_img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url_category: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "CategoryBubbles",
    tableName: "category_bubbles",
    timestamps: true,
    underscored: true,
  },
);

module.exports = CategoryBubbles;
