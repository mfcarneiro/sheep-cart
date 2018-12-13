export const cartItems = state => state.cartItems;

export const getCartTotal = state => {
	return state.cartItems
		.reduce((accumulator, cartItem) => {
			return cartItem.quantity * cartItem.price + accumulator;
		}, 0)
		.toFixed(2);
};

export const getCartQuantity = state => {
	return state.cartItems.reduce((accumulator, cartItem) => {
		return cartItem.quantity + accumulator;
	}, 0);
};
