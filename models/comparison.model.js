import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const Comparison = sequelize.define("Comparison", {
  Month: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },

  Last_year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  This_year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Comparison.sync().then(() => {
  console.log("Comparison Model synced");
});

export default Comparison;
