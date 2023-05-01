import { useContext, Fragment, useState } from "react";
import { CartContext } from "../../store/cartContext";
import { transformCart } from "../../store/cartContext";
import CartItem from "./CartItem";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Cart() {
  const { cartOpen, setCartOpen, cart, setCart } = useContext(CartContext);

  const cartTotal = Object.values(cart).reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  return (
    <Box sx={{ width: "20rem", padding: "1rem" }}>
      <List
        subheader={
          <ListSubheader
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography color="primary" variant="h4" component="p">
              Cart
            </Typography>
            <IconButton color="primary" onClick={() => setCartOpen(false)}>
              <CloseIcon></CloseIcon>
            </IconButton>
          </ListSubheader>
        }
      >
        {Object.values(cart).map((item) => (
          <Fragment key={item.id}>
            <CartItem item={item} setCart={setCart}></CartItem>
            <Divider key={item.id}></Divider>
          </Fragment>
        ))}
      </List>
      {cartTotal ? (
        <Box>
          <Typography variant="body1">Sub Total: ${cartTotal}</Typography>

          <Button
            endIcon={<DeleteOutlineIcon></DeleteOutlineIcon>}
            variant="text"
            onClick={() => setCart({})}
            disabled={!cartTotal}
          >
            Empty
          </Button>
          <Button
            variant="contained"
            disabled={!cartTotal}
            onClick={() => transformCart(cart)}
          >
            Checkout
          </Button>
        </Box>
      ) : (
        <Typography variant="body1" textAlign="center">
          Your Cart is Empty!
        </Typography>
      )}
    </Box>
  );
  // 	<Dialog
  // 		open={cartOpen}
  // 		onClose={() => setCartOpen(false)}
  // 		maxWidth="sm"
  // 		fullWidth
  // 	>
  // 		<DialogTitle
  // 			sx={{
  // 				display: "flex",
  // 				alignItems: "center",
  // 				justifyContent: "space-between",
  // 			}}
  // 		>
  // 			Cart
  // 			<IconButton color="primary" onClick={() => setCartOpen(false)}>
  // 				<CloseIcon></CloseIcon>
  // 			</IconButton>
  // 		</DialogTitle>
  // 		<DialogContent>
  // <List>
  // 	{Object.values(cart).map((item) => (
  // 		<Fragment key={item.id}>
  // 			<CartItem item={item} setCart={setCart}></CartItem>
  // 			<Divider key={item.id}></Divider>
  // 		</Fragment>
  // 	))}
  // </List>
  // 			<DialogContentText align="right" variant="h5">
  // 				Total: ${cartTotal}
  // 			</DialogContentText>
  // 		</DialogContent>
  // 		<DialogActions>
  // <Button
  // 	endIcon={<DeleteOutlineIcon></DeleteOutlineIcon>}
  // 	variant="text"
  // 	onClick={() => setCart({})}
  // 	disabled={!cartTotal}
  // >
  // 	Empty
  // </Button>
  // <Button
  // 	variant="contained"
  // 	disabled={!cartTotal}
  // 	onClick={() => transformCart(cart)}
  // >
  // 	Checkout
  // </Button>
  // 		</DialogActions>
  // 	</Dialog>
  // );
}
