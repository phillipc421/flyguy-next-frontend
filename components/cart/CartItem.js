import {
  addToCartHandler,
  removeFromCartHandler,
} from "../../store/cartContext";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CartItemButtons from "./CartItemButtons";
export default function CartItem({ item, setCart }) {
  const { name, price, qty, image } = item;
  return (
    <ListItem
      secondaryAction={
        <CartItemButtons
          addFunc={() => setCart((prev) => addToCartHandler(prev, item))}
          removeFunc={() =>
            setCart((prev) => removeFromCartHandler(prev, item))
          }
        ></CartItemButtons>
      }
    >
      <ListItemAvatar>
        <Avatar alt={name} src={image}></Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={price + " x" + qty}
      ></ListItemText>
    </ListItem>
  );
}
