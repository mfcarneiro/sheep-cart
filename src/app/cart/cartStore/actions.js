import axios from 'axios';

export const getCartItems = ({ commit }) => {
	axios.get('/api/cart').then(response => {
		commit('UPDATE_CART_ITEMS', response.data);
	});
};

export const addCartItem = ({ commit }, cartItem) => {
	axios.post('/api/cart', cartItem).then(response => {
		commit('UPDATE_CART_ITEMS', response.data);
	});
};

export const removeCartItem = ({ commit }, cartItem) => {
	axios.post('/api/cart/delete', cartItem).then(response => {
		commit('UPDATE_CART_ITEMS', response.data);
	});
};

export const removeAllCartItems = ({ commit }) => {
	axios.post('/api/cart/delete/all').then(response => {
		commit('UPDATE_CART_ITEMS', response.data);
	});
};
