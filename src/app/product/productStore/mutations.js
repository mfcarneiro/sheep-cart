import { UPDATE_PRODUCT_ITEM } from './mutation-types';

export default {
	[UPDATE_PRODUCT_ITEM](state, payload) {
		state.productItems = payload;
	}
};
