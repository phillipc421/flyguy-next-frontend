import { useContext, Fragment } from "react";
import { CartContext } from "../../store/cartContext";
import CartItem from "./CartItem";
import List from "@mui/material/List";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Cart() {
	const { cartOpen, setCartOpen, cart, setCart } = useContext(CartContext);

	const cartTotal = Object.values(cart).reduce(
		(acc, item) => acc + item.price * item.qty,
		0
	);
	return (
		<Dialog
			open={cartOpen}
			onClose={() => setCartOpen(false)}
			maxWidth="sm"
			fullWidth
		>
			<DialogTitle
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				Cart
				<IconButton color="primary" onClick={() => setCartOpen(false)}>
					<CloseIcon></CloseIcon>
				</IconButton>
			</DialogTitle>
			<DialogContent>
				<List>
					{Object.values(cart).map((item) => (
						<Fragment key={item.id}>
							<CartItem item={item} setCart={setCart}></CartItem>
							<Divider key={item.id}></Divider>
						</Fragment>
					))}
				</List>
				<DialogContentText align="right" variant="h5">
					Total: ${cartTotal}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					endIcon={<DeleteOutlineIcon></DeleteOutlineIcon>}
					variant="text"
					onClick={() => setCart({})}
					disabled={!cartTotal}
				>
					Empty
				</Button>
				<Button variant="contained" disabled={!cartTotal}>
					Checkout
				</Button>
			</DialogActions>
		</Dialog>
	);
}
