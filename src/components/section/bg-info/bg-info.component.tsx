import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../container/container.component';
import './bg-info.scss';

export const BackgroundInfo = ({
	children,
	className = '',
	title,
	link,
	desc,
}: {
	children: JSX.Element;
	className?: string;
	title: string;
	desc: string;
	link?: { name: string; href: string };
}) => {
	return (
		<div className={'background-info ' + className}>
			<Container>
				<div className="background-info__row">
					<div className="background-info__colum-info">
						<h2 className="background-info__title h1-title">{title}</h2>
						<p className="background-info__desc desc">{desc}</p>
						{link && (
							<Link className="background-info__link h3-title" to={link.href}>
								{link.name}
								<svg
									width="9"
									height="17"
									viewBox="0 0 9 17"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8.67619 9.33434L1.88741 16.6382C1.45556 17.103 0.755394 17.103 0.323755 16.6382C-0.107918 16.1737 -0.107918 15.4205 0.323755 14.9561L6.33078 8.49329L0.32393 2.03073C-0.107744 1.56611 -0.107744 0.812908 0.32393 0.34847C0.755604 -0.116157 1.45574 -0.116157 1.88759 0.34847L8.67637 7.65242C8.8922 7.88475 9 8.18892 9 8.49325C9 8.79772 8.89199 9.10212 8.67619 9.33434Z"
										fill="#E8AA31"
									/>
								</svg>
							</Link>
						)}
					</div>
					<div className="background-info__colum-content">{children}</div>
				</div>
			</Container>
		</div>
	);
};
