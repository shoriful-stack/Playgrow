const express = require("express");
const cors = require("cors");
require("dotenv").config();

const categoryRoutes = require("./Routes/categoryRoutes");
const productRoutes = require("./Routes/productRoutes");
const blogRoutes = require("./Routes/blogRoutes");
const reviewRoutes = require("./Routes/reviewRoutes");

const app = express();
// middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://medi-nest.web.app",
    "https://medi-nest.firebaseapp.com",
  ]
}));
app.use(express.json());

app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/blogs", blogRoutes);
app.use("/reviews", reviewRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));