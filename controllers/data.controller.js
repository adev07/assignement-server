import Comparison from "../models/comparison.model.js";
import TopProducts from "../models/top-products.model.js";
import SalesData from "../models/sales-data.model.js";

export const getAllData = async (req, res) => {
  try {
    const [comparison, topProducts, sales_data] = await Promise.all([
      Comparison.findAll(),
      TopProducts.findAll(),
      SalesData.findAll(),
    ]);

    res.json({
      comparison,
      topProducts,
      sales_data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
