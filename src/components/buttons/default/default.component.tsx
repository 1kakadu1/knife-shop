import React from 'react';
import { Link } from 'react-router-dom';
import './default.scss';
interface IButtonDefaultProps extends React.DOMAttributes<HTMLButtonElement> {
	className?: string;
	children: JSX.Element;
	link?: string;
}
export const ButtonDefault = ({
	children,
	className = '',
	onClick,
	link,
	...props
}: IButtonDefaultProps) => {
	return link ? (
		<Link to={link} className={`${className} btn-default`}>
			<span className="btn-default__content">{children}</span>
		</Link>
	) : (
		<button className={`${className} btn-default`} onClick={onClick} {...props}>
			<span className="btn-default__content">{children}</span>
		</button>
	);
};
