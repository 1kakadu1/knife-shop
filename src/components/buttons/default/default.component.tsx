import React from 'react';
import { Link } from 'react-router-dom';
import './default.scss';

export const ButtonDefault = ({
	children,
	className = '',
	onClick,
	link,
}: {
	className?: string;
	children: JSX.Element;
	onClick?: () => void;
	link?: string;
}) => {
	return link ? (
		<Link to={link} className={`${className} btn-default`}>
			<span className="btn-default__content">{children}</span>
		</Link>
	) : (
		<button className={`${className} btn-default`} onClick={onClick}>
			<span className="btn-default__content">{children}</span>
		</button>
	);
};
