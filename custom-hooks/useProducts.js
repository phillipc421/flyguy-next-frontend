import { useEffect, useState } from "react";
export default function useProducts() {
	console.log("hook ran");
	const [products, setProducts] = useState(null);
	const getProducts = () => {
		const run = async () => {
			const res = await fetch("http://localhost:3000/products");
			const data = await res.json();
			setProducts(data);
		};
		run();
	};
	useEffect(getProducts, []);
	return products;
}
