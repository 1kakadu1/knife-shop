import { createSlice } from '@reduxjs/toolkit';
import { mockCategory } from '../../../global-mock/category.mock';
import { CATEGORY_KEY } from './category.const';
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
