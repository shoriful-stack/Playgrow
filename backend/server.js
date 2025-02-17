const express = require("express");
const cors = require("cors");
require("dotenv").config();

const categoryRoutes = require("./Routes/categoryRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/categories", categoryRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));