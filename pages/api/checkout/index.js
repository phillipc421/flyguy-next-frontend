export default async function handler(req, res) {
  const METHOD = req.method;
  // checkout needs to be separate from the intent endpoint
  switch (METHOD) {
    case "POST":
      try {
        // convert body to schema for backend
        const cartItems = Object.values(req.body).map((item) => ({
          id: item.id,
          qty: item.qty,
        }));
        const response = await fetch("http://localhost:3000/stripe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: cartItems }),
        });
        const data = await response.json();
        if (response.ok) {
          return res.status(response.status).json(data);
        }
        return res.status(response.status).json(data.message);
      } catch (e) {
        return res.status(500).json({ message: "Internal Server Error" });
      }
  }
}
