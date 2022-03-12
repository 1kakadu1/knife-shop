import { createSelector } from '@reduxjs/toolkit';
import { createFeatureSelector } from '../../../utils/store.utils';
import { CATEGORY_KEY } from './category.const';
import { ICategoryState } from './category.model';

export const categorySelector =
	createFeatureSelector<ICategoryState>(CATEGORY_KEY);

const category = createSelector(categorySelector, ({ category }) => category);

export const toCategorySelector = {
	category,
};
