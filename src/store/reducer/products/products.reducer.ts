import { createSlice } from '@reduxjs/toolkit';

import { PRODUCTS_KEY } from './products.const';
import { productsStateMock } from './products.mock';
import {
	IProductData,
	IProductsFilter,
	IProductsState,
} from './products.model';

const setProducts = (
	state: IProductsState,
	{ payload }: { payload: IProductData[] }
) => {
	state.products = payload;
};

const productsRequest = (state: IProductsState) => {
	state.isLoading = true;
	state.error = '';
};

const productsRequestSuccess = (
	state: IProductsState,
	{ payload }: { payload: IProductData[] }
) => {
	state.products = payload;
	state.isLoading = false;
	state.error = '';
};

const productsRequestFailed = (
	state: IProductsState,
	{ payload }: { payload: string }
) => {
	state.isLoading = false;
	state.error = payload;
};

const productsFilter = (
	state: IProductsState,
	{ payload }: { payload: IProductsFilter }
) => {
	state.filter = { ...payload };
};

const productsStars = (
	state: IProductsState,
	{ payload }: { payload: { id: string; size: string; stars: number } }
) => {
	const items = [...state.products];
	const item = items.findIndex(
		(x) => x.id === payload.id && x.size === payload.size
	);
	console.log('aaaa', item, payload);
	if (item !== -1) {
		state.products[item].userStars = payload.stars;
	}
};

export const productsSlice = createSlice({
	name: PRODUCTS_KEY,
	initialState: productsStateMock,
	reducers: {
		productsRequestFailed,
		setProducts,
		productsRequest,
		productsRequestSuccess,
		productsFilter,
		productsStars,
	},
});

export const toProductsAction = productsSlice.actions;
