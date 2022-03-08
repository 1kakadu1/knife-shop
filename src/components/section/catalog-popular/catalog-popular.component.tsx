import React from 'react';
import { ICatalogPopularProps } from './catalog-popular.model';
import { Container } from '../../container/container.component';
import { CardInfo } from '../../ cards/card-info/card-info.component';
import './catalog-popular.scss';

export const CatalogPopular = ({
	data,
	className = '',
	prefixKey = 'popular',
	items,
}: ICatalogPopularProps) => {
	return (
		<Container>
			<div className={`catalog-popular ${className}`}>
				{data.map((item, index) => (
					<div
						className={`catalog-popular__item ${
							items ? 'catalog-popular_item-' + items : ''
						}`}
						key={'key-' + prefixKey + '-' + index}
					>
						<CardInfo
							//key={"cat-"+index}
							{...item}
						/>
					</div>
				))}
			</div>
		</Container>
	);
};
