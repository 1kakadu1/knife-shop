import React from 'react';
import { useWindowSize } from '../../../utils/useWindowSize';
import { ButtonDefault } from '../../buttons/default/default.component';
import { CardWrapper } from '../card-wrapper/card-wrapper.component';
import { ICardInfoProps } from './card-info.model';
import './card-info.scss';

export const CardInfo = ({
	className = '',
	link,
	title,
	desc,
	list,
	preview,
	prefixKey = 'any',
}: ICardInfoProps) => {
	const { width } = useWindowSize();
	return (
		<CardWrapper paddingNull>
			<div className={`card-info ${className}`}>
				<div className="card-info__row">
					<div className="card-info__column card-info-column__left">
						<div className="card-info__title">{title}</div>
						{desc && <div className="card-info__desc">{desc}</div>}
						{list && (
							<ul className="card-info__list list-info">
								{list.map((item, index) => (
									<li
										className={`list-info__item ${
											index === 0 ? 'list-info_pd-top-null' : ''
										}`}
										key={'list-item-' + prefixKey + '-' + index}
									>
										{item}
									</li>
								))}
							</ul>
						)}
						{link && width > 420 && (
							<div className="card-info__wrapper-link">
								<ButtonDefault className="card-info__link" link={link}>
									<>Подробнее</>
								</ButtonDefault>
							</div>
						)}
					</div>
					<div className="card-info__column card-info-column__right">
						{typeof preview === 'string' ? (
							<img src={preview} alt="" className="card-info__preview" />
						) : (
							<picture>
								{preview.map((item) => (
									<source
										key={item.media || 'init'}
										{...{ srcSet: item.src, media: item.media }}
									/>
								))}
								<img
									srcSet={preview[preview.length - 1].src}
									alt=""
									className="card-info__preview"
								/>
							</picture>
						)}
					</div>
					{link && width < 420 && (
						<div className="card-info__wrapper-link">
							<ButtonDefault
								className="card-info__link card-info_link-full-width"
								link={link}
							>
								<>Подробнее</>
							</ButtonDefault>
						</div>
					)}
				</div>
			</div>
		</CardWrapper>
	);
};
