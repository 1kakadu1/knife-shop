export enum RoutsPath {
	home = '/',
	news = '/news',
	news_single = '/news-single',
	product = '/product',
	products = '/products',
	cart = '/cart',
	not_found = '/404',
	order = '/order',
	contact = '/contact',
	about = '/about',
	order_and_sell = '/order-and-sell',
}

export interface IRouteItem {
	name: string;
	icon?: JSX.Element;
	private: boolean;
	element: JSX.Element;
	location: RoutsPath;
	path: string;
}
