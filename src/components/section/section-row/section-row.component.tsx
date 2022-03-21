import React from 'react';
import { Container } from '../../container/container.component';
import './section-row.scss';

export const SectionRow = ({
	children,
	className = '',
	container = true,
}: {
	children: JSX.Element | JSX.Element[];
	className?: string;
	container?: boolean;
}) => {
	return container ? (
		<Container>
			<div className={`section-row ${className}`}>{children}</div>
		</Container>
	) : (
		<div className={`section-row ${className}`}>{children}</div>
	);
};
