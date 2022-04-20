export enum RoutsPath {
	home = '/',
	news = '/news',
	product = '/product',
	products = '/products',
	cart = '/cart',
	not_found = '/404',
	order = '/order',
}

export interface IRouteItem {
	name: string;
	icon?: JSX.Element;
	private: boolean;
	element: JSX.Element;
	location: RoutsPath;
	path: string;
}
