import React from 'react';
import { ICardIconInfoProps } from './card-icon-info.model';
import './card-icon-info.scss';

export const CardIconInfo = ({
	icon,
	title,
	description,
	className = '',
	color = 'write',
}: ICardIconInfoProps) => {
	return (
		<div className={'card-icon-info ' + className}>
			<div className={`card-icon-info__icon card-icon-info_${color}`}>
				{typeof icon === 'string' ? <img src={icon} alt="" /> : icon}
			</div>
			{title && (
				<div className={`card-icon-info__title  card-icon-info_${color}`}>
					{title}
				</div>
			)}
			<div className={`card-icon-info__description  card-icon-info_${color}`}>
				{description}
			</div>
		</div>
	);
};
