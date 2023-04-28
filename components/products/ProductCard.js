import { useContext, useState } from "react";
import { CartContext, addToCartHandler } from "../../store/cartContext";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "./ProductCard.module.css";
import ProductCardInfo from "./ProductCardInfo";
export default function ProductCard({ product }) {
  const { setCart } = useContext(CartContext);
  const [moreInfoClicked, setMoreInfoClicked] = useState(false);
  const {
    name,
    price,
    stock,
    id,
    description,
    image,
    longDescription,
    ingredients,
  } = product;

  const clickHandler = () =>
    setCart((prev) => addToCartHandler(prev, { name, price, id, image }));
  return (
    <article className={styles.container}>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
      <img src={image} alt={name}></img>
      {!moreInfoClicked && (
        <>
          <Typography variant="body1" sx={{ height: "4rem" }}>
            {description}
          </Typography>
          <Button variant="outlined" onClick={() => setMoreInfoClicked(true)}>
            More Info
          </Button>
          <Typography variant="body1">${price}</Typography>
        </>
      )}
      {moreInfoClicked && (
        <ProductCardInfo
          ingredients={ingredients}
          longDesc={longDescription}
        ></ProductCardInfo>
      )}
      <Button variant="contained" onClick={clickHandler}>
        Add To Cart
      </Button>
    </article>
  );
}
