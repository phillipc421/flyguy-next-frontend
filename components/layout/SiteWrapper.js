import { useUser } from "@auth0/nextjs-auth0/client";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Header from "./Header";
import NavBar from "./navigation/NavBar";
import Footer from "./Footer";
import styles from "./SiteWrapper.module.css";

export default function SiteWrapper({ children }) {
  const { user, error, isLoading } = useUser();

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
    </main>
  );
}
