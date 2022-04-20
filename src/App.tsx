import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import { routesPublic } from './routes/routes';
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
							{routesPublic.map((route) => (
								<Route
									path={route.path}
									element={route.element}
									key={route.path}
								/>
							))}
						</Routes>
						<CartMini portal />
					</Router>
					<NotificationBar />
					<FavoriteModal />
				</NotificationContext.Provider>
			</Provider>
		</div>
	);
}

export default App;
