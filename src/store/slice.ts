import { cartSlice } from './reducer/cart/cart.reducer';
import { favoriteSlice } from './reducer/favorite/favorite.reducer';
import { productsSlice } from './reducer/products/products.reducer';

export const slices = {
	[productsSlice.name]: productsSlice.reducer,
	[cartSlice.name]: cartSlice.reducer,
	[favoriteSlice.name]: favoriteSlice.reducer,
};
