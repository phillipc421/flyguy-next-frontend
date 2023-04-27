export default async function handler(req, res) {
  const METHOD = req.method;
  switch (METHOD) {
    case "POST":
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

    case "PUT":
      try {
        let { id, price, stock, ...remains } = req.body;
        const body = { ...remains };
        if (price) {
          price = parseInt(price);
          body.price = price;
        }
        if (stock) {
          stock = parseInt(stock);
          body.stock = stock;
        }

        const response = await fetch("http://localhost:3000/products/" + id, {
          method: "PUT",
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
}
