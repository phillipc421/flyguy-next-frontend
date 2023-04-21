import Button from "../ui/Button";
import styles from "./ProductCard.module.css";
export default function ProductCard({ product }) {
	const { name, price, stock, description, image } = product;
	return (
		<article className={styles.container}>
			<h2>{name}</h2>
			<img src={image} alt={name}></img>
			<p>{description}</p>
			<p>${price}</p>
			<Button label={"Add to Cart"} variant={"primary"}></Button>
		</article>
	);
}
