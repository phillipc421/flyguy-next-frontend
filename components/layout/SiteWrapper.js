import { useUser } from "@auth0/nextjs-auth0/client";
import { useContext } from "react";
import { CartContext } from "../../store/cartContext";
import Cart from "../cart/Cart";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import Header from "./Header";
import NavBar from "./navigation/NavBar";
import Footer from "./Footer";
import styles from "./SiteWrapper.module.css";

export default function SiteWrapper({ children }) {
  const { user, error, isLoading } = useUser();
  const { cartOpen, setCartOpen } = useContext(CartContext);
  console.log("USER", user);
  return (
    <main className={styles.container}>
      <Header>
        <Link href={"/"}>
          <p className={styles.logo}>FLYGUY Hair</p>
        </Link>
        <div className={styles.menu}>
          {user && (
            <Typography variant="body1">
              Hi, {user.nickname[0].toUpperCase() + user.nickname.slice(1)}
            </Typography>
          )}
          <NavBar></NavBar>
        </div>
      </Header>
      {children}
      <Footer>
        <Typography variant="body1">
          &#169; {new Date().getFullYear()} FLYGUY Hair LLC
        </Typography>
      </Footer>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart></Cart>
      </Drawer>
    </main>
  );
}
