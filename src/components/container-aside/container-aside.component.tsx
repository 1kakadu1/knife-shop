import React from 'react';
import { IContainerAsideProps } from './container-aside.model';
import './container-aside.scss';

export const ContainerAside = ({
	aside,
	content,
	position = 'left',
	sticky,
}: IContainerAsideProps) => {
	return (
		<div className="container-aside">
			<div
				className={`container-aside__left container-aside_order-${position} ${
					sticky ? 'container-aside_sticky' : ''
				}`}
			>
				{aside}
			</div>
			<div className="container-aside__content">{content}</div>
		</div>
	);
};
