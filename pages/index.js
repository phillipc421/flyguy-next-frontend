import { useState } from "react";
import Cart from "../components/cart/Cart";
import ProductList from "../components/products/productList";
import useProducts from "../custom-hooks/useProducts";

export default function Home() {
	const [open, setOpen] = useState(false);
	const products = useProducts();

	const closeHandler = () => setOpen(false);
	return (
		<main>
			<ProductList products={products}></ProductList>
			<Cart open={open} onClose={closeHandler}></Cart>
			<button onClick={() => setOpen(true)}>Open</button>
		</main>
	);
}
