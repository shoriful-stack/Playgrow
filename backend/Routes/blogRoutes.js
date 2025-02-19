const express = require("express");
const { blogCollection } = require("../Config/db");

const router = express.Router();

// Add blogs (Bulk Insert)
router.post("/add", async (req, res) => {
  try {
    const blogs = req.body;
    const result = await blogCollection.insertMany(blogs);
    res
      .status(201)
      .json({ success: true, insertedCount: result.insertedCount });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

//  Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await blogCollection.find().toArray();
    res.status(200).json({ success: true, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
