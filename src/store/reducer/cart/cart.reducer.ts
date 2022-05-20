import { createSlice } from '@reduxjs/toolkit';
import { CART_KEY } from './cart.const';
import { ICart, ICartComments, ICartItem } from './cart.model';

const setCart = (
	state: ICart,
	{ payload }: { payload: { prod: ICartItem[] } }
) => {
	state.products = payload.prod;
};

const add = (
	state: ICart,
	{ payload }: { payload: { prod: ICartItem; size: string } }
) => {
	const item = [...state.products].findIndex(
		(x) => x.id === payload.prod.id && x.productSize === payload.size
	);

	if (item === -1) {
		state.products.push({
			...payload.prod,
			count: 1,
			productSize: payload.size,
		});
	} else {
		state.products[item].count += 1;
	}
};

const sub = (
	state: ICart,
	{ payload }: { payload: { prod: ICartItem; size: string } }
) => {
	const item = [...state.products].findIndex(
		(x) => x.id === payload.prod.id && x.productSize === payload.size
	);

	if (item !== -1 && state.products[item].count - 1 > 0) {
		state.products[item].count -= 1;
	} else if (item !== -1 && state.products[item].count - 1 <= 0) {
		state.products.splice(item, 1);
	}
};

const remove = (
	state: ICart,
	{ payload }: { payload: { id: string; size: string } }
) => {
	const item = [...state.products].findIndex(
		(x) => x.id === payload.id && x.productSize === payload.size
	);

	if (item !== -1) {
		state.products.splice(item, 1);
	}
};

const clear = (state: ICart) => {
	state.products = [];
};

const changeComments = (
	state: ICart,
	{ payload }: { payload: ICartComments }
) => {
	const item = [...state.products].findIndex(
		(x) => x.id === payload.id && x.productSize === payload.size
	);

	if (item !== -1) {
		state.products[item].comments = payload.comments;
	}
};

const toggleCart = (state: ICart, { payload }: { payload: boolean }) => {
	state.isOpen = payload;
};

export const cartSlice = createSlice({
	name: CART_KEY,
	initialState: {
		isOpen: false,
		products: [],
	},
	reducers: {
		add,
		sub,
		clear,
		remove,
		changeComments,
		toggleCart,
		setCart,
	},
});

export const toCartAction = cartSlice.actions;
