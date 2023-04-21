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
};

export default function CartContextProvider({ children }) {
	const [cart, setCart] = useState({});
	const [cartOpen, setCartOpen] = useState(false);
	console.log(setCart);
	return (
		<CartContext.Provider value={{ cart, setCart, cartOpen, setCartOpen }}>
			{children}
		</CartContext.Provider>
	);
}
