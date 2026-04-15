require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const orderRoutes = require("./routes/orderRoutes");

app.use(cors());
app.use(express.json());

app.use("/api", orderRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
