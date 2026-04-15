const orderService = require("../services/orderService");

exports.createOrder = async (req, res) => {
  try {
    const data = await orderService.createOrder(req.body);
    res.json({ message: "Order created", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const data = await orderService.getOrders();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const data = await orderService.updateStatus(
      req.params.id,
      req.body.status,
    );
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
