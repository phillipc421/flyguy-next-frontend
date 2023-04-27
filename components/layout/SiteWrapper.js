import { useContext } from "react";
import { CartContext } from "../../store/cartContext";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import styles from "./SiteWrapper.module.css";
export default function SiteWrapper({ children }) {
  const { setCartOpen, cartCount } = useContext(CartContext);
  return (
    <main className={styles.container}>
      <Header>
        <p>FLYGUY Hair</p>
        <NavBar links={[{ title: "Login", href: "/login" }]}></NavBar>
        <IconButton color="primary" onClick={() => setCartOpen(true)}>
          <Badge badgeContent={cartCount}>
            <ShoppingCartIcon fontSize="large"></ShoppingCartIcon>
          </Badge>
        </IconButton>
      </Header>
      {children}
      <Footer>
        <p>&#169; {new Date().getFullYear()} FLYGUY Hair LLC</p>
      </Footer>
    </main>
  );
}
