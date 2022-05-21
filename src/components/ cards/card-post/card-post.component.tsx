import React from 'react';
import { Link } from 'react-router-dom';
import { RoutsPath } from '../../../routes/routes.model';
import { CardWrapper } from '../card-wrapper/card-wrapper.component';
import { ICardPostProps } from './card-post.model';
import './card-post.scss';

export const CardPost = ({ data, className, shadow }: ICardPostProps) => {
	return (
		<CardWrapper paddingNull stretch shadow={shadow}>
			<div className={'card-post ' + className}>
				<img src={data.preview} alt="" className="card-post__preview" />
				<Link
					to={RoutsPath.news_single + '/' + data.href}
					className="card-post____body"
				>
					<>
						<h3 className="card-post__title">{data.title}</h3>
						{data.desc && <p className="card-post__desc">{data.desc}</p>}
						<p className="card-post__date">{data.date}</p>
					</>
				</Link>
			</div>
		</CardWrapper>
	);
};
