import { useContext } from "react";
import { CartContext } from "../../store/cartContext";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
export default function CartIcon() {
  const { setCartOpen, cartCount } = useContext(CartContext);
  return (
    <IconButton color="primary" onClick={() => setCartOpen(true)}>
      <Badge badgeContent={cartCount}>
        <ShoppingCartIcon fontSize="medium"></ShoppingCartIcon>
      </Badge>
    </IconButton>
  );
}
