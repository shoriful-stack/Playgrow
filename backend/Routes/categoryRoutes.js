const express = require("express");
const { categoryCollection } = require("../Config/db");

const router = express.Router();

// Add categories (Bulk Insert)
router.post("/add", async (req, res) => {
  try {
    const categories = req.body;
    const result = await categoryCollection.insertMany(categories);
    res.status(201).json({ success: true, insertedCount: result.insertedCount });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

//  Get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await categoryCollection.find().toArray();
    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;