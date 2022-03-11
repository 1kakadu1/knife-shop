import { createSlice } from '@reduxjs/toolkit';
import { FAVORITE_KEY } from './favorite.const';
import { IFavoriteData, IFavoriteState } from './favorite.model';

const add = (
	state: IFavoriteState,
	{ payload }: { payload: { prod: IFavoriteData; size: string } }
) => {
	const item = [...state.favorites].findIndex(
		(x) => x.id === payload.prod.id && x.productSize === payload.size
	);

	if (item === -1) {
		state.favorites.push({
			...payload.prod,
		});
	}
};

const toggleFavorite = (
	state: IFavoriteState,
	{ payload }: { payload: { product: IFavoriteData; size: string } }
) => {
	const item = [...state.favorites].findIndex(
		(x) => x.id === payload.product.id && x.productSize === payload.size
	);

	if (item !== -1) {
		state.favorites.splice(item, 1);
	} else {
		state.favorites.push(payload.product);
	}
};

const remove = (
	state: IFavoriteState,
	{ payload }: { payload: { id: string; size: string } }
) => {
	const item = [...state.favorites].findIndex(
		(x) => x.id === payload.id && x.productSize === payload.size
	);

	if (item !== -1) {
		state.favorites.splice(item, 1);
	}
};

const clear = (state: IFavoriteState) => {
	state.favorites = [];
};

const toggleWindow = (
	state: IFavoriteState,
	{ payload }: { payload: boolean }
) => {
	state.isOpen = payload;
};

const setFavorite = (
	state: IFavoriteState,
	{ payload }: { payload: IFavoriteData[] }
) => {
	state.favorites = payload;
};

export const favoriteSlice = createSlice({
	name: FAVORITE_KEY,
	initialState: {
		isOpen: false,
		favorites: [],
	},
	reducers: {
		add,
		clear,
		remove,
		toggleWindow,
		toggleFavorite,
		setFavorite,
	},
});

export const toFavoriteAction = favoriteSlice.actions;
