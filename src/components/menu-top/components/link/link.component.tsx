import React from 'react';
import { ReactComponent as UserIcon } from '../../../../assets/svg/user.svg';
import './link.styles.scss';

export const LinkProfile = () => {
	return (
		<a className="link-profile" href="#">
			<span className="link-profile__icon">
				<UserIcon />
			</span>
			Личный кабинет
		</a>
	);
};
