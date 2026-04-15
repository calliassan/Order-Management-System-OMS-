const express = require("express");
const router = express.Router();

const {
  createOrder,
  getOrders,
  updateStatus,
} = require("../controllers/orderController");

router.post("/orders", createOrder);
router.get("/orders", getOrders);
router.put("/orders/:id/status", updateStatus);

module.exports = router;
