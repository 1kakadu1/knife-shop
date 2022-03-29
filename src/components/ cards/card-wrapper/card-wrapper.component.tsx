import React from 'react';
import './card-wrapper.scss';

export const CardWrapper = ({
	className = '',
	children,
	paddingNull,
	stretch,
}: {
	className?: string;
	children: JSX.Element | JSX.Element[];
	paddingNull?: boolean;
	stretch?: boolean;
}) => {
	return (
		<div
			className={`card-wrapper ${className}${stretch ? ' stretch' : ''} ${
				paddingNull ? 'card-wrapper_padding-null' : ''
			}`}
		>
			{children}
		</div>
	);
};
