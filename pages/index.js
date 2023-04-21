import ProductList from "../components/products/productList";
import useProducts from "../custom-hooks/useProducts";

export default function Home() {
	const products = useProducts();
	return (
		<main>
			<ProductList products={products}></ProductList>
		</main>
	);
}
