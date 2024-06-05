const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define("Inventory", {
    itemTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    marketPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    costPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    margin: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    inventoryType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Inventory;
};
