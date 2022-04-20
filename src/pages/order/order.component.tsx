import React from 'react';
import { Helmet } from 'react-helmet';
import { Box } from '../../components/box/box.component';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.component';
import { Container } from '../../components/container/container.component';
import { Footer } from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import { useCart } from '../../hook/useCart';
import { RoutsPath } from '../../routes/routes.model';

export const OrderPage = () => {
	const { cart } = useCart();

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Оформление заказа</title>
			</Helmet>
			<Header />
			<Container>
				<Box styles={{ padding: '30px 0px' }}>
					<Breadcrumbs
						links={[
							{
								href: RoutsPath.cart,
								name: 'Корзина',
							},
							{ name: 'Оформление заказа' },
						]}
					/>
				</Box>
			</Container>

			<Footer />
		</div>
	);
};
