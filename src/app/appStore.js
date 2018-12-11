import { vuex as cartStore } from './cart';
import { vuex as productStore } from './product';

export default { ...cartStore, ...productStore };
