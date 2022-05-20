import React from 'react';
import { IAboutInfoProps } from './about-info.model';
import './about-info.scss';

export const AboutSection = ({ preview, text, order = 0 }: IAboutInfoProps) => {
	return (
		<div className="about-item">
			<div className={`about-item__left about-item_order-${order}`}>
				<img src={preview} className="about-item__preview" alt="" />
			</div>
			<div className="about-item__right">
				<p className="about-item__text">{text}</p>
			</div>
		</div>
	);
};
