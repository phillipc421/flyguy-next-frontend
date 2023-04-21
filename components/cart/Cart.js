import { useContext } from "react";
import { CartContext } from "../../store/cartContext";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function Cart() {
	const { cartOpen, setCartOpen, cart, setCart } = useContext(CartContext);
	return (
		<Dialog open={cartOpen} onClose={() => setCartOpen(false)}>
			<DialogTitle>Cart</DialogTitle>
			<DialogContent>
				<DialogContentText>{JSON.stringify(cart)}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => setCartOpen(false)} variant="outlined">
					Close
				</Button>
				<Button variant="contained">Checkout</Button>
			</DialogActions>
		</Dialog>
	);
}
