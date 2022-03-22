import React, { useEffect, useState } from 'react';
import { HomePage } from './pages/home.component';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import './assets/fonts/Montserrat/Montserrat-Regular.ttf';
import './assets/fonts/Montserrat/Montserrat-SemiBold.ttf';
import './styles/theme.scss';
import NotificationContext, {
	NotificationStatus,
} from './components/notification-bar/notification-bar.context';
import { NotificationBar } from './components/notification-bar/notification-bar.component';
import { Provider } from 'react-redux';
import { store } from './store/state';
import { CartMini } from './components/cart/cart.mini.components';
import { FavoriteModal } from './components/favorite/favorite.component';
import { RoutsPath } from './routes/routes';
import { NotFoundPage } from './pages/not-found/not-found.component';
import { ProductsPage } from './pages/products/products.componet';
import { ProductPage } from './pages/product/product.component';

function App() {
	const [notification, setNotification] = useState({
		message: '',
		status: NotificationStatus.success,
	});
	const contextValue = { notification, updateNotification: setNotification };

	return (
		<div className="App">
			<Provider store={store}>
				<NotificationContext.Provider value={contextValue}>
					<Router>
						<Routes>
							<Route path={RoutsPath.home} element={<HomePage />} />
							<Route
								path={RoutsPath.products + '/:page'}
								element={<ProductsPage />}
							/>
							<Route
								path={RoutsPath.products}
								element={<Navigate replace to={RoutsPath.products + '/1'} />}
							/>
							<Route
								path={RoutsPath.product + '/:slug'}
								element={<ProductPage />}
							/>
							<Route path={'*'} element={<NotFoundPage />} />
						</Routes>
					</Router>
					<NotificationBar />
					<CartMini portal />
					<FavoriteModal />
				</NotificationContext.Provider>
			</Provider>
		</div>
	);
}

export default App;
