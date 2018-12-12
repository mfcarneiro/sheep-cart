import axios from 'axios';

export default {
	getProductItens({ commit }) {
		axios.get('/api/products').then(response => {
			commit('UPDATE_PRODUCT_ITEM', response.data);
		});
	}
};
