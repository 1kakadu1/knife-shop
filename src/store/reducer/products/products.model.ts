export interface IProductsState {
	isLoading: boolean;
	error: string;
	products: IProductData[];
	filter: IProductsFilter;
}

export interface IProductData {
	id: string;
	preview: string;
	name: string;
	price: string | number;
	href: string;
	desc: string;
	category: string[];
	countComments: number;
	userStars?: number;
	usersStars?: number;
	size: string;
}

export interface IProductsFilter {
	order: 'asc' | 'desc';
}
