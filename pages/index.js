import useProducts from "../custom-hooks/useProducts";

export default function Home() {
	const products = useProducts();
	return (
		<div>
			{products &&
				products.map((product) => (
					<p key={product.id}>{JSON.stringify(product)}</p>
				))}
		</div>
	);
}
