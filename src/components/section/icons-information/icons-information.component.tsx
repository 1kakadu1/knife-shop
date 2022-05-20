import React from 'react';
import { CardIconInfo } from '../../ cards/card-icon-info/card-icon-info.component';
import { IIconsInformationProps } from './icons-information.model';
import './icons-information.scss';

export const IconsInformation = ({
	className = '',
	data,
	color = 'write',
}: IIconsInformationProps) => {
	return (
		<div className={'icons-information ' + className}>
			{data.map((item, index) => (
				<div
					className="icons-information__item"
					key={'icons-information-' + index}
				>
					<CardIconInfo
						icon={item.icon}
						description={item.description}
						color={color}
					/>
				</div>
			))}
		</div>
	);
};
