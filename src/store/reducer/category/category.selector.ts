import { createSelector } from '@reduxjs/toolkit';
import { createFeatureSelector } from '../../../utils/store.utils';
import { CATEGORY_KEY } from './category.const';
import { ICategoryState } from './category.model';

export const categorySelector =
	createFeatureSelector<ICategoryState>(CATEGORY_KEY);

const category = createSelector(categorySelector, ({ category }) => category);
const categoryParent = createSelector(categorySelector, ({ category }) =>
	category.filter(
		(x) => x.catalog !== undefined && x.parentCategory === undefined
	)
);
const categoryCatalog = createSelector(categorySelector, ({ category }) =>
	category.filter(
		(x) => x.catalog === undefined && x.parentCategory === undefined
	)
);
const categorySub = (id?: string) =>
	createSelector(categorySelector, ({ category }) => {
		if (id) {
			return category.filter(
				(x) => x.catalog === undefined && x.parentCategory?.includes(id)
			);
		}
		return category.filter(
			(x) => x.catalog === undefined && x.parentCategory !== undefined
		);
	});

export const toCategorySelector = {
	category,
	categoryParent,
	categoryCatalog,
	categorySub,
};
