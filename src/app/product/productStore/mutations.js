import * as types from './mutation-types';

export default {
	[types.UPDATE_PRODUCT_ITEM](state, payload) {
		state.productItems = payload;
	}
};
