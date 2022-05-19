import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as UserIcon } from '../../../../assets/svg/user.svg';
import './link.styles.scss';

export const LinkProfile = () => {
	return (
		<Link to={'/profile'} className="link-profile">
			<span className="link-profile__icon">
				<UserIcon />
			</span>
			Войти
		</Link>
	);
};
