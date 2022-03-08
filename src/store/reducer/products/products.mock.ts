import { sliderProductsMock } from '../../../components/section/slider-product/slider-product.mock';
import { IProductsState } from './products.model';

export const productsStateMock: IProductsState = {
	isLoading: false,
	error: '',
	products: sliderProductsMock,
	filter: {
		order: 'asc',
	},
};
