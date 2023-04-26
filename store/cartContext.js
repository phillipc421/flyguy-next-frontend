import { createContext, useState } from "react";

export const CartContext = createContext({});

export const addToCartHandler = (currentCart, product) => {
	if (currentCart[product.id]) {
		return {
			...currentCart,
			[product.id]: { ...product, qty: ++currentCart[product.id].qty },
		};
	}
	return { ...currentCart, [product.id]: { ...product, qty: 1 } };
};

export const removeFromCartHandler = (currentCart, product) => {
	const currentProduct = currentCart[product.id];
	if (!currentProduct) return;
	const updatedCart = {
		...currentCart,
		[product.id]: { ...product, qty: --currentCart[product.id].qty },
	};
	if (updatedCart[product.id].qty <= 0) {
		delete updatedCart[product.id];
	}
	return updatedCart;
};

// transform cart for backend
export const transformCart = (cart) => {
	const items = { items: Object.values(cart) };
	console.log(items);
	return items;
};

export default function CartContextProvider({ children }) {
	const [cart, setCart] = useState({});
	const [cartOpen, setCartOpen] = useState(false);
	console.dir(cart);

	const cartCount = Object.values(cart).reduce(
		(acc, product) => acc + product.qty,
		0
	);
	return (
		<CartContext.Provider
			value={{ cart, setCart, cartOpen, setCartOpen, cartCount }}
		>
			{children}
		</CartContext.Provider>
	);
}
