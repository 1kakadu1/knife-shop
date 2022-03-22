import { createSelector } from '@reduxjs/toolkit';
import { createFeatureSelector } from '../../../utils/store.utils';
import { IProductData } from '../product/product.model';
import { PRODUCTS_KEY } from './products.const';
import { FiltersKey, IProductsState } from './products.model';

export const productsSelector =
	createFeatureSelector<IProductsState>(PRODUCTS_KEY);

const error = createSelector(productsSelector, ({ error }) => error);
const isLoading = createSelector(
	productsSelector,
	({ isLoading }) => isLoading
);
const products = createSelector(productsSelector, ({ products }) => products);
const total = createSelector(
	productsSelector,
	({ products }) => products.length
);
const filter = createSelector(productsSelector, ({ filter }) => filter);
const productsLimit = (start: number, end: number) =>
	createSelector(productsSelector, ({ products }) =>
		products.slice(start, end)
	);

//TODO: FAKE FILTER
const productsFilter = (offset: number, limit = 6) =>
	createSelector(productsSelector, ({ products, filter }) => {
		let prod: IProductData[] = [];
		let count = 0;
		for (let a = offset; a < products.length; a++) {
			if (count === limit) {
				break;
			}
			count++;
			prod.push(products[a]);
		}

		if (filter.order) {
			prod.sort((a, b) => {
				if (filter.order === 'popular') {
					const op1 = a.usersStars || 0;
					const op2 = b.usersStars || 0;
					return op1 - op2;
				}

				return 0;
			});
		}

		if (
			filter[FiltersKey.rangePrice] !== undefined &&
			filter[FiltersKey.rangePrice]?.length === 2
		) {
			prod = prod.filter(
				(x) =>
					x.price >= filter[FiltersKey.rangePrice]![0] &&
					x.price <= filter[FiltersKey.rangePrice]![1]
			);
		}

		if (filter[FiltersKey.rating] !== undefined) {
			const values = Object.values(filter[FiltersKey.rating]!);
			prod = prod.filter((item) => values.includes(item.usersStars.toString()));
		}

		if (filter[FiltersKey.category] !== undefined) {
			const values = Object.keys(filter[FiltersKey.category]!);
			const newProducts = [];
			for (let j = 0; j < prod.length; j++) {
				const item = prod[j];
				for (let i = 0; i < item.category.length; i++) {
					if (values.includes(item.category[i].id)) {
						newProducts.push(item);
						break;
					}
				}
			}

			prod = newProducts;
		}

		return prod;
	});

export const toProductsSelector = {
	isLoading,
	products,
	error,
	filter,
	productsLimit,
	productsFilter,
	total,
};
