import { cartSlice } from './reducer/cart/cart.reducer';
import { categorySlice } from './reducer/category/category.reducer';
import { favoriteSlice } from './reducer/favorite/favorite.reducer';
import { newsSlice } from './reducer/news/news.reducer';
import { productSlice } from './reducer/product/product.reducer';
import { productsSlice } from './reducer/products/products.reducer';
import { singleNewsSlice } from './reducer/single-news/single-news.reducer';

export const slices = {
	[productsSlice.name]: productsSlice.reducer,
	[productSlice.name]: productSlice.reducer,
	[cartSlice.name]: cartSlice.reducer,
	[favoriteSlice.name]: favoriteSlice.reducer,
	[categorySlice.name]: categorySlice.reducer,
	[newsSlice.name]: newsSlice.reducer,
	[singleNewsSlice.name]: singleNewsSlice.reducer,
};
