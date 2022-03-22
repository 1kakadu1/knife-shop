import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import { RoutsPath } from '../../routes/routes';
import './not-found.scss';

export const NotFoundPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Not found page - 404</title>
			</Helmet>
			<Header />
			<div className="not-found">
				<div className="face">
					<div className="band">
						<div className="red"></div>
						<div className="white"></div>
						<div className="blue"></div>
					</div>
					<div className="eyes"></div>
					<div className="dimples"></div>
					<div className="mouth"></div>
				</div>

				<h1>
					Oops! Something went wrong! <br /> 404{' '}
				</h1>
				<Link to={RoutsPath.home} className="btn">
					Return to Home
				</Link>
			</div>
			<Footer />
		</div>
	);
};
