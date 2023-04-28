import { useContext } from "react";
import { CartContext } from "../../store/cartContext";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
export default function CartIcon() {
  const { cartCount } = useContext(CartContext);
  return (
    <Badge badgeContent={cartCount}>
      <ShoppingCartIcon fontSize="medium"></ShoppingCartIcon>
    </Badge>
  );
}
