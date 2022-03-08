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

export const productsSlice = createSlice({
	name: PRODUCTS_KEY,
	initialState: productsStateMock,
	reducers: {
		productsRequestFailed,
		setProducts,
		productsRequest,
		productsRequestSuccess,
		productsFilter,
	},
});

export const toProductsAction = productsSlice.actions;
