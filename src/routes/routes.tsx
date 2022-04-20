import { Navigate } from 'react-router-dom';
import { HomePage } from '../pages/home.component';
import { NotFoundPage } from '../pages/not-found/not-found.component';
import { ProductsPage } from '../pages/products/products.componet';
import { IRouteItem, RoutsPath } from './routes.model';
import { CartPage } from '../pages/cart/cart.component';
import { ProductPage } from '../pages/product/product.component';
import { OrderPage } from '../pages/order/order.component';

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
		name: '404',
		private: false,
		element: <NotFoundPage />,
		location: RoutsPath.not_found,
		path: '*',
	},
];

export const routesPrivate: IRouteItem[] = [];
