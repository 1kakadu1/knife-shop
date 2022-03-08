import React from 'react';
import { Container } from '../../container/container.component';
import './section-row.scss';

export const SectionRow = ({
	children,
	className = '',
}: {
	children: JSX.Element | JSX.Element[];
	className?: string;
}) => {
	return (
		<Container>
			<div className={`section-row ${className}`}>{children}</div>
		</Container>
	);
};
