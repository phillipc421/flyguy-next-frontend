import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function Cart({ open, onClose }) {
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>Cart</DialogTitle>
			<DialogContent>
				<DialogContentText>Your cart content</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} variant="outlined">
					Close
				</Button>
				<Button variant="contained">Checkout</Button>
			</DialogActions>
		</Dialog>
	);
}
