import axios from 'axios';

export const getProductItems = ({ commit }) => {
	axios.get('/api/products').then(response => {
		commit('UPDATE_PRODUCT_ITEM', response.data);
	});
};
