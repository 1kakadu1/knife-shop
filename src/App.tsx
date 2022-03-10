import React, { useState } from 'react';
import { HomePage } from './pages/home.component';
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
							<Route path="/" element={<HomePage />} />
						</Routes>
					</Router>
					<NotificationBar />
					<CartMini portal />
				</NotificationContext.Provider>
			</Provider>
		</div>
	);
}

export default App;
