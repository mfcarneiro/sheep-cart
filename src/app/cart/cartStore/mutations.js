import * as types from './mutation-types';

export default {
	[types.UPDATE_CART_ITEMS](state, payload) {
		state.cartItems = payload;
	}
};
