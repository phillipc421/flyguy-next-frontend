export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      let { price, stock } = req.body;
      price = parseInt(price);
      stock = parseInt(stock);
      const body = { ...req.body, price, stock };
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (response.ok) {
        return res.status(response.status).json(data);
      }
      return res.status(response.status).json(data.message);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
  console.log("NOT A POST");
  return res.status(400).json({ message: "Invalid Request" });
}
