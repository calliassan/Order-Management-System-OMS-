import { updateStatusAPI } from "../api";

export function OrderItem({ order, refresh }) {
  const nextStep = {
    Placed: "Packed",
    Packed: "Shipped",
    Shipped: "Delivered",
  };

  const handleUpdate = async () => {
    const next = nextStep[order.status];
    if (!next) return;

    await updateStatusAPI(order.id, next);
    refresh();
  };

  return (
    <div style={{ border: "1px solid", margin: "10px", padding: "10px" }}>
      <p>
        <b>{order.product_name}</b>
      </p>
      <p>Amount: {order.amount}</p>
      <p>User: {order.user_name}</p>
      <p>Status: {order.status}</p>

      {nextStep[order.status] && (
        <button onClick={handleUpdate}>Move to {nextStep[order.status]}</button>
      )}
    </div>
  );
}
