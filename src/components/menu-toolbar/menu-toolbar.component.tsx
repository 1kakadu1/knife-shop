import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CITY_DEFAULT, PHONES } from '../../const/setting.const';
import { RoutsPath } from '../../routes/routes.model';
import { toFavoriteAction } from '../../store/reducer/favorite/favorite.reducer';
import { CartInfoBtn } from '../cart-info-btn/cart-info-btn.component';

import { CityContact } from '../city-contact/city-contact.component';
import { IconFavorite } from '../icons/favorite.icon.component';
import { InputSearch } from '../input-search/input-search.component';
import { Logo } from './components/logo/logo.component';
import './menu-toolbar.scss';

export const MenuToolbar = () => {
	const dispatch = useDispatch();
	const onOpenFavorite = () => {
		dispatch(toFavoriteAction.toggleWindow(true));
	};

	return (
		<div className="menu-toolbar">
			<div className="menu-toolbar__logo">
				<Link to={RoutsPath.home}>
					<Logo />
				</Link>
			</div>
			<div className="menu-toolbar__search">
				<InputSearch placeholder="Поиск" onSearch={() => void 0} />
			</div>
			<div className="menu-toolbar__contact">
				<CityContact city={CITY_DEFAULT} phones={PHONES} />
			</div>

			<div className="menu-toolbar-actions">
				<div
					className="menu-toolbar-actions__favorite favorite-btn"
					onClick={onOpenFavorite}
				>
					<IconFavorite className={'favorite-btn__icon'} />
				</div>
				<CartInfoBtn />
			</div>
		</div>
	);
};
