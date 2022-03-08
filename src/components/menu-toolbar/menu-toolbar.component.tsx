import React from 'react';
import { CartInfoBtn } from '../cart-info-btn/cart-info-btn.component';

import { CityContact } from '../city-contact/city-contact.component';
import { IconFavorite } from '../icons/favorite.icon.component';
import { InputSearch } from '../input-search/input-search.component';
import { Logo } from './components/logo/logo.component';
import './menu-toolbar.scss';

const phones = [
	'9-900-999-99-99',
	'9-900-999-99-99',
	'9-900-999-99-99',
	'9-900-999-99-99',
	'9-900-999-99-99',
];

export const MenuToolbar = () => {
	return (
		<div className="menu-toolbar">
			<div className="menu-toolbar__logo">
				<Logo />
			</div>
			<div className="menu-toolbar__search">
				<InputSearch placeholder="Поиск" onSearch={() => void 0} />
			</div>
			<div className="menu-toolbar__contact">
				<CityContact city="Уганда" phones={phones} />
			</div>

			<div className="menu-toolbar-actions">
				<div className="menu-toolbar-actions__favorite favorite">
					<IconFavorite className={'favorite__icon'} />
				</div>
				<CartInfoBtn />
			</div>
		</div>
	);
};
