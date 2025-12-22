const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

class CollectionProduct extends Model {}

CollectionProduct.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    collection_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "collections",
        key: "id",
      },
    },
    product_variation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "product_variation",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "CollectionProduct",
    tableName: "collection_product",
    timestamps: false,
  }
);

module.exports = CollectionProduct;
