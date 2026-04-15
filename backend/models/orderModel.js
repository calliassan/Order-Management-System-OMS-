const db = require("../config/db");

exports.createOrder = async (name) => {
  return db.query("INSERT INTO orders (customer_name) VALUES ($1)", [name]);
};

exports.getOrderById = async (id) => {
  return db.query("SELECT * FROM orders WHERE id = $1", [id]);
};

exports.updateOrderStatus = async (id, status) => {
  return db.query("UPDATE orders SET status = ? WHERE id = ?", [status, id]);
};
