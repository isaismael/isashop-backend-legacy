const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

class Banner extends Model {}

Banner.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    button_text: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    button_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "Banner",
    tableName: "banner",
    timestamps: true,
    underscored: true,
  },
);

module.exports = Banner;
