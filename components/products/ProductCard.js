import { useContext } from "react";
import { CartContext, addToCartHandler } from "../../store/cartContext";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "./ProductCard.module.css";
export default function ProductCard({ product }) {
  const { setCart } = useContext(CartContext);
  const { name, price, stock, id, description, image } = product;

  const clickHandler = () =>
    setCart((prev) => addToCartHandler(prev, { name, price, id, image }));
  return (
    <article className={styles.container}>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
      <img src={image} alt={name}></img>
      <Typography variant="body1" sx={{ height: "4rem" }}>
        {description}
      </Typography>
      <Typography variant="body1">${price}</Typography>
      <Button variant="contained" onClick={clickHandler}>
        Add To Cart
      </Button>
    </article>
  );
}
