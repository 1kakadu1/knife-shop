import React from 'react';
import { IContainerAsideProps } from './container-aside.model';
import './container-aside.scss';

export const ContainerAside = ({
	aside,
	content,
	position = 'left',
	sticky,
	height = 'full',
	shadow,
}: IContainerAsideProps) => {
	return (
		<div className="container-aside">
			<div
				className={`container-aside__left container-aside_order-${position} ${
					sticky ? 'container-aside_sticky' : ''
				} ${shadow ? 'container-aside_shadow_desktop' : ''}`}
			>
				{aside}
			</div>
			<div
				className={`container-aside__content container-aside_height-${height}`}
			>
				{content}
			</div>
		</div>
	);
};
