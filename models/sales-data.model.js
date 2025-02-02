import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const SalesData = sequelize.define("sales_data", {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    primaryKey: true,
  },

  web_sales: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  offline_sales: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

SalesData.sync().then(() => {
  console.log("SalesData Model synced");
});

export default SalesData;
