import styles from "./ProductList.module.css";
import ProductCard from "./ProductCard";
export default function ProductList({ products }) {
	return (
		<section className={styles.container}>
			{products.map((product) => (
				<ProductCard key={product.id} product={product}></ProductCard>
			))}
		</section>
	);
}
