import React, { useState } from 'react';
import { IconArrow } from '../icons/arrow.icon.component';
import { IconLocation } from '../icons/location.icon.component';
import { TitleText } from '../titles/title-text/title-text.component';
import { ICityContactProps } from './city-contact.model';
import './city-contact.scss';

export const CityContact = ({ city, phones }: ICityContactProps) => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div className="city-contact">
			<div className="location city-contact__location">
				<IconLocation className="location__icon city-contact__icon" />
				<TitleText text={city} className="location__name" />
			</div>
			{phones.length > 0 && (
				<div className="phones phones_position_relative">
					<div className="phones-info">
						<div
							className="phones-info__link phones_default"
							onClick={() => setOpen(!open)}
						>
							{phones[0]}
							{phones.length > 1 && (
								<IconArrow
									className={`phones__icon phones_margin-icon ${
										open ? 'icon_rotate' : ''
									}`}
								/>
							)}
						</div>
						<div className="phones-info__callback">Заказать звонок</div>
					</div>
					<ul
						className={`phones-list phones-list_position_absolute ${
							open ? 'phones-list_show' : 'phones-list_hide'
						}`}
					>
						{phones.map((item) => (
							<li className="phones-list__item" key={item}>
								<a
									className="phones-list__link"
									href={`tel:${item.replace(/-/g, '')}`}
								>
									{item}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};
