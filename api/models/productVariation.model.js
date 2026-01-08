const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

class ProductVariation extends Model {}

ProductVariation.init(
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
    sku_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "product",
        key: "id",
      },
    },
    color_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "color",
        key: "id",
      },
    },
    size_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "size",
        key: "id",
      },
    },
    older_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    current_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    }
  },
  {
    sequelize,
    modelName: "ProductVariation",
    tableName: "product_variation",
    timestamps: false,
  }
);

module.exports = ProductVariation;
