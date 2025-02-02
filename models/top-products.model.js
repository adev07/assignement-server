import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const TopProducts = sequelize.define("TopProducts", {
  Product: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },

  sold_amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  unit_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  revenue: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  rating: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

TopProducts.sync().then(() => {
  console.log("TopProducts Model synced");
});

export default TopProducts;
