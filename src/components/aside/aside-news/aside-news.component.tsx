import React from 'react';
import { IAsideNewsProps } from './aside-news.model';
import { Aside } from '../aside.component';
import { Box } from '../../box/box.component';
import '../aside.scss';
import './aside-news.scss';
import { cardPostsMock } from '../../../global-mock/card-post.mock';
import { CardPost } from '../../ cards/card-post/card-post.component';

export const AsideNews = ({ className = '', ...props }: IAsideNewsProps) => {
	return (
		<Aside onClose={props.onClose} open={props.open}>
			<div className={'aside-news' + className}>
				<Box styles={{ padding: '10px' }}>
					<span className="aside-news__info">Популярно у читателей</span>
				</Box>
				<div className="aside-news__widget">
					<CardPost data={cardPostsMock[0]} shadow={false} />
				</div>
				<Box styles={{ padding: '5px' }} />
			</div>
		</Aside>
	);
};
