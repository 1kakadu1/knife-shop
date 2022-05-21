import { Navigate } from 'react-router-dom';
import { HomePage } from '../pages/home.component';
import { NotFoundPage } from '../pages/not-found/not-found.component';
import { ProductsPage } from '../pages/products/products.componet';
import { IRouteItem, RoutsPath } from './routes.model';
import { CartPage } from '../pages/cart/cart.component';
import { ProductPage } from '../pages/product/product.component';
import { OrderPage } from '../pages/order/order.component';
import { ContactPage } from '../pages/contact/contact.component';
import { AboutPage } from '../pages/about/about.component';
import { OrderAndSellPage } from '../pages/order-and-sell/order-and-sell.component';
import { NewsPage } from '../pages/news/news.component';
import { NewsSinglePage } from '../pages/news/news-single.component';

export const routesPublic: IRouteItem[] = [
	{
		name: 'Home',
		private: false,
		element: <HomePage />,
		location: RoutsPath.home,
		path: RoutsPath.home,
	},
	{
		name: 'Products',
		private: false,
		element: <ProductsPage />,
		location: RoutsPath.products,
		path: RoutsPath.products + '/:page',
	},
	{
		name: 'Products redirect',
		private: false,
		element: <Navigate replace to={RoutsPath.products + '/1'} />,
		location: RoutsPath.products,
		path: RoutsPath.products,
	},
	{
		name: 'Product single',
		private: false,
		element: <ProductPage />,
		location: RoutsPath.product,
		path: RoutsPath.product + '/:slug',
	},
	{
		name: 'News',
		private: false,
		element: <NewsPage />,
		location: RoutsPath.news,
		path: RoutsPath.news + '/:page',
	},
	{
		name: 'News redirect',
		private: false,
		element: <Navigate replace to={RoutsPath.news + '/1'} />,
		location: RoutsPath.news,
		path: RoutsPath.news,
	},
	{
		name: 'News single',
		private: false,
		element: <NewsSinglePage />,
		location: RoutsPath.news,
		path: RoutsPath.news_single + '/:slug',
	},
	{
		name: 'Cart',
		private: false,
		element: <CartPage />,
		location: RoutsPath.cart,
		path: RoutsPath.cart,
	},
	{
		name: 'Order',
		private: false,
		element: <OrderPage />,
		location: RoutsPath.order,
		path: RoutsPath.order,
	},
	{
		name: 'Contact',
		private: false,
		element: <ContactPage />,
		location: RoutsPath.contact,
		path: RoutsPath.contact,
	},
	{
		name: 'About',
		private: false,
		element: <AboutPage />,
		location: RoutsPath.about,
		path: RoutsPath.about,
	},
	{
		name: 'Order and sell',
		private: false,
		element: <OrderAndSellPage />,
		location: RoutsPath.order_and_sell,
		path: RoutsPath.order_and_sell,
	},
	{
		name: '404',
		private: false,
		element: <NotFoundPage />,
		location: RoutsPath.not_found,
		path: '*',
	},
];

export const routesPrivate: IRouteItem[] = [];
