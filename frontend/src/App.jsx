import { OrderForm } from "./components/OrderForm";
import { OrderList } from "./components/OrderList";

function App() {
  const refreshRef = { current: null };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Order Tracking System</h1>

      <OrderForm refresh={() => refreshRef.current?.()} />

      <OrderList ref={(ref) => (refreshRef.current = ref)} />
    </div>
  );
}

export default App;
