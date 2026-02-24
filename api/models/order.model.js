const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "customer",
        key: "id",
      },
    },
    total_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    payment_method_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "payment_method",
        key: "id",
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shipping_adress_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "shipping_adress",
        key: "id",
      },
    },
    pickup_address_id: {
      type: DataTypes.INTEGER,
      allowNull: true, // null cuando es delivery
      references: {
        model: "pickup_address",
        key: "id",
      },
    },
    is_pickup: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    warehouse_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "warehouse",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Order",
    tableName: "order",
    timestamps: true,
    underscored: true,
  },
);

module.exports = Order;
