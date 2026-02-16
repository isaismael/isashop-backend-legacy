const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

class BrandImage extends Model {}

BrandImage.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    brand_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "brand",
        key: "id",
      },
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_logo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "BrandImage",
    tableName: "brand_image",
    timestamps: true,
    underscored: true,
  },
);

module.exports = BrandImage;
