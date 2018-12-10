import { routes as app } from '../app';

const root = [{ path: '/', redirect: '/' }];

export default [...root, ...app];
