import { createSlice } from '@reduxjs/toolkit';

import { PRODUCT_KEY } from './product.const';
import { productsStateMock } from './product.mock';
import { IProductData, IProductState } from './product.model';

const setProduct = (
	state: IProductState,
	{ payload }: { payload: IProductData | undefined }
) => {
	state.product = payload;
};

const productRequest = (state: IProductState) => {
	state.isLoading = true;
	state.error = '';
};

const productRequestSuccess = (
	state: IProductState,
	{ payload }: { payload: IProductData }
) => {
	state.product = payload;
	state.isLoading = false;
	state.error = '';
};

const productRequestFailed = (
	state: IProductState,
	{ payload }: { payload: string }
) => {
	state.isLoading = false;
	state.error = payload;
};

const productStars = (
	state: IProductState,
	{ payload }: { payload: { id: string; size: string; stars: number } }
) => {};

export const productSlice = createSlice({
	name: PRODUCT_KEY,
	initialState: productsStateMock,
	reducers: {
		productRequestFailed,
		setProduct,
		productRequest,
		productRequestSuccess,
		productStars,
	},
});

export const toProductAction = productSlice.actions;
