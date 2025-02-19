const express = require("express");
const { reviewCollection } = require("../Config/db");

const router = express.Router();

// Add reviews (Bulk Insert)
router.post("/add", async (req, res) => {
  try {
    const reviews = req.body;
    const result = await reviewCollection.insertMany(reviews);
    res
      .status(201)
      .json({ success: true, insertedCount: result.insertedCount });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

//  Get all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await reviewCollection.find().toArray();
    res.status(200).json({ success: true, data: reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
