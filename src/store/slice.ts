import { cartSlice } from './reducer/cart/cart.reducer';
import { productsSlice } from './reducer/products/products.reducer';

export const slices = {
	[productsSlice.name]: productsSlice.reducer,
	[cartSlice.name]: cartSlice.reducer,
};
