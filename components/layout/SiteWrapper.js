import { useContext } from "react";
import { CartContext } from "../../store/cartContext";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./SiteWrapper.module.css";
export default function SiteWrapper({ children }) {
	const { setCartOpen } = useContext(CartContext);
	return (
		<main className={styles.container}>
			<Header>
				<p>FLYGUY Hair</p>
				<IconButton color="primary" onClick={() => setCartOpen(true)}>
					<Badge badgeContent={4}>
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
