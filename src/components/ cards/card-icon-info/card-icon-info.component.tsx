import React from 'react';
import { ICardIconInfoProps } from './card-icon-info.model';
import './card-icon-info.scss';

export const CardIconInfo = ({
	icon,
	description,
	className = '',
}: ICardIconInfoProps) => {
	return (
		<div className={'card-icon-info ' + className}>
			<div className="card-icon-info__icon">
				{typeof icon === 'string' ? <img src={icon} alt="" /> : icon}
			</div>
			<div className="card-icon-info__description">{description}</div>
		</div>
	);
};
