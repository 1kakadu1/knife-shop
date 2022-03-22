import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import { RoutsPath } from '../../routes/routes';

export const ProductPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Product</title>
			</Helmet>
			<Header />

			<Footer />
		</div>
	);
};
