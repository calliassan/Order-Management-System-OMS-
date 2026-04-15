const BASE_URL = import.meta.env.VITE_API_URL;

export const createOrderAPI = async (data) => {
  const res = await fetch(`${BASE_URL}/api/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getOrdersAPI = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/orders`);

    if (!res.ok) {
      throw new Error("API failed");
    }

    return await res.json();
  } catch (err) {
    console.error(err);
    return []; // prevent crash
  }
};

export const updateStatusAPI = async (id, status) => {
  const res = await fetch(`${BASE_URL}/api/orders/${id}/status`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });
  return res.json();
};
