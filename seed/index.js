import { sequelize } from "../config/db.js";
import Comparison from "../models/comparison.model.js";
import TopProducts from "../models/top-products.model.js";
import SalesData from "../models/sales-data.model.js";
import data from "./data.json" assert { type: "json" };

const seedData = async () => {
  try {
    await sequelize.drop();
    console.log("All tables dropped");

    await sequelize.sync();
    console.log("Tables created");

    await Comparison.bulkCreate(data.comparison);
    console.log("Comparison data seeded");

    await SalesData.bulkCreate(data["sales-data"]);
    console.log("SalesData seeded");

    await TopProducts.bulkCreate(data["top-products"]);
    console.log("TopProducts data seeded");

    sequelize.close();
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

seedData();
