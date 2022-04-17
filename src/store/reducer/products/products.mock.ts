import { sliderProductsMock } from '../../../global-mock/slider-product.mock';
import { IProductsState } from './products.model';

export const productsStateMock: IProductsState = {
	isLoading: false,
	error: '',
	products: sliderProductsMock,
	filter: {},
};
