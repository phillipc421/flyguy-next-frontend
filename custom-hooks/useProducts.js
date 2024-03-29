import { useEffect, useState } from "react";
export default function useProducts(currentProduct) {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    const run = async () => {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      setProducts(data);
    };
    run();
  };
  useEffect(getProducts, [currentProduct]);
  return products;
}
