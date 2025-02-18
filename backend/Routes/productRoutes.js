const express = require("express");
const { productCollection, categoryCollection } = require("../Config/db");

const router = express.Router();

// Add products (Bulk Insert) with Category id validation and joining with Categories
router.post("/add", async (req, res) => {
  try {
    const products = req.body;

    // Extract category id from products
    const categoryId = [
      ...new Set(products.map((product) => product.category_id)),
    ];

    // Check if all category id exist in the categoryCollection
    const existingCategories = await categoryCollection
      .find({ id: { $in: categoryId } })
      .toArray();
    const categoryMap = existingCategories.reduce((acc, category) => {
      acc[category.id] = { id: category.id, name: category.name };
      return acc;
    }, {});

    // Validate category id and attach category details
    const processedProducts = products.map((product) => {
      if (!categoryMap[product.category_id]) {
        throw new Error(`Category ID ${product.category_id} does not exist`);
      }
      return {
        ...product,
        category: categoryMap[product.category_id],
      };
    });

    // Insert products with category reference
    const result = await productCollection.insertMany(processedProducts);
    res
      .status(201)
      .json({ success: true, insertedCount: result.insertedCount });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

//  Get all products
router.get("/", async (req, res) => {
  try {
    const products = await productCollection.find().toArray();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
