import { useContext } from "react";
import { CartContext, addToCartHandler } from "../../store/cartContext";
import Button from "@mui/material/Button";
import styles from "./ProductCard.module.css";
export default function ProductCard({ product }) {
	const { setCart } = useContext(CartContext);
	const { name, price, stock, id, description, image } = product;

	const clickHandler = () =>
		setCart((prev) => addToCartHandler(prev, { name, price, id, image }));
	return (
		<article className={styles.container}>
			<h2>{name}</h2>
			<img src={image} alt={name}></img>
			<p className={styles.description}>{description}</p>
			<p>${price}</p>
			<Button variant="contained" onClick={clickHandler}>
				Add To Cart
			</Button>
		</article>
	);
}
