require("dotenv").config();

const express = require("express");
const app = express();

const orderRoutes = require("./routes/orderRoutes");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/api", orderRoutes);
app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server running on port ${process.env.PORT}`),
);
