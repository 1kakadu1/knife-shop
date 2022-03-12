import { createSlice } from '@reduxjs/toolkit';
import { CATEGORY_KEY } from './category.const';
import { mockCategory } from './category.mock';
import { ICategoryItemData, ICategoryState } from './category.model';

const setCategory = (
	state: ICategoryState,
	{ payload }: { payload: ICategoryItemData[] }
) => {
	state.category = payload;
};

export const categorySlice = createSlice({
	name: CATEGORY_KEY,
	initialState: {
		category: mockCategory,
	},
	reducers: {
		setCategory,
	},
});

export const toCategoryAction = categorySlice.actions;
