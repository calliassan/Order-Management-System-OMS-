import { useEffect, useState } from "react";
import { getOrdersAPI } from "../api";
import { OrderItem } from "./OrderItem";

export function OrderList() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await getOrdersAPI();
    setOrders(res.data ? [res.data] : res);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h3>Orders</h3>

      {orders.map((order) => (
        <OrderItem key={order.id} order={order} refresh={fetchOrders} />
      ))}
    </div>
  );
}
