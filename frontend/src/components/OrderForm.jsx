import { useState } from "react";
import { createOrderAPI } from "../api";

export function OrderForm({ refresh }) {
  const [form, setForm] = useState({
    product_name: "",
    amount: "",
    user_id: 1,
  });

  const handleSubmit = async () => {
    await createOrderAPI(form);
    setForm({ product_name: "", amount: "", user_id: 1 });
    refresh();
  };

  return (
    <div>
      <h3>Create Order</h3>

      <input
        placeholder="Product"
        value={form.product_name}
        onChange={(e) => setForm({ ...form, product_name: e.target.value })}
      />

      <input
        placeholder="Amount"
        type="number"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />

      <button onClick={handleSubmit}>Create</button>
    </div>
  );
}
