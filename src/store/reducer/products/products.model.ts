import { ICategoryItemData } from '../category/category.model';

export interface IProductsState {
	isLoading: boolean;
	error: string;
	products: IProductData[];
	filter: IProductsFilter;
	product?: IProductData;
}

export interface IProductData {
	id: string;
	preview: string;
	name: string;
	price: string | number;
	href: string;
	desc: string;
	material: string[];
	category: ICategoryItemData[];
	countComments: number;
	userStars?: number;
	usersStars: number;
	size: string;
}

export enum FiltersKey {
	order = 'order',
	rangePrice = 'rangePrice',
	production = 'production',
	rangeWidth = 'rangeWidth',
	rating = 'rating',
	category = 'category',
}

export interface IProductsFilter {
	[FiltersKey.order]?: TypeOrder;
	[FiltersKey.rangePrice]?: number[];
	[FiltersKey.production]?: { [key: string]: string };
	[FiltersKey.rangeWidth]?: number[];
	[FiltersKey.rating]?: { [key: string]: string };
	[FiltersKey.category]?: { [key: string]: string };
}

export type TypeOrder = 'price-asc' | 'price-desc' | 'popular';
