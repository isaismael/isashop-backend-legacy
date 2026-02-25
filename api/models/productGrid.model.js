const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

class ProductGrid extends Model {}

ProductGrid.init(
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    collection_id: {
      type: DataTypes.INTEGER,
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
    modelName: "ProductGrid",
    tableName: "product_grid",
    timestamps: true,
    underscored: true,
  },
);

module.exports = ProductGrid;
