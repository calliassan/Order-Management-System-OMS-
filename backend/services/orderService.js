const db = require("../config/db");

exports.createOrder = async ({ product_name, amount, user_id }) => {
  const result = await db.query(
    `INSERT INTO orders (product_name, amount, user_id, status)
     VALUES ($1, $2, $3, 'Placed')
     RETURNING *`,
    [product_name, amount, user_id],
  );

  return result.rows[0];
};

exports.getOrders = async () => {
  const result = await db.query(`
    SELECT o.id, o.product_name, o.amount, o.status, u.name AS user_name
    FROM orders o
    JOIN users u ON o.user_id = u.id
  `);

  return result.rows;
};

const validFlow = {
  Placed: "Packed",
  Packed: "Shipped",
  Shipped: "Delivered",
};

exports.updateStatus = async (id, newStatus) => {
  const res = await db.query("SELECT status FROM orders WHERE id = $1", [id]);

  if (res.rows.length === 0) {
    throw new Error("Order not found");
  }

  const currentStatus = res.rows[0].status;

  if (validFlow[currentStatus] !== newStatus) {
    throw new Error(`Invalid transition: ${currentStatus} → ${newStatus}`);
  }

  await db.query("UPDATE orders SET status = $1 WHERE id = $2", [
    newStatus,
    id,
  ]);

  return { message: "Status updated" };
};
