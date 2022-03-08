import React from 'react';
import { Container } from '../../container/container.component';
import './text-info.scss';

export const TextInfo = ({ text, title }: { text: string; title: string }) => {
	return (
		<div className="text-info">
			<Container>
				<h1 className="text-info__title">{title}</h1>
				<p className="text-info__desc">{text}</p>
			</Container>
		</div>
	);
};
